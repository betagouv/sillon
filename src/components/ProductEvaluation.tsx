import BrowserOnly from '@docusaurus/BrowserOnly';
import { faEye, faEyeSlash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Converter } from 'showdown';
import {
  ItemValue,
  Model,
  PanelModel,
  PanelVisibleChangedEvent,
  QuestionCheckboxModel,
  QuestionRadiogroupModel,
  SurveyModel,
  ValueChangedEvent,
  surveyLocalization,
} from 'survey-core';
import 'survey-core/defaultV2.min.css';
import 'survey-core/i18n/french';
import { Survey } from 'survey-react-ui';

surveyLocalization.currentLocale = 'fr';

type Indicator = 'green' | 'orange' | 'red' | 'none';

const surveyJson = {
  // TODO: progressBar counts "notes"...
  // TODO: add mention in the Presentation section a quizz is available to go faster (in case of product existing and evaluating makes more sense to the reader, in a tip block)
  // TODO: make sure links exist really (any Docusaurus helper?) --> pas possible vu que on les connaît au moment du build
  // TODO: le calcul doit se faire sur ceux affichés ... Ajuster ?
  // showProgressBar: 'auto',
  progressBarType: 'questions',
  showNavigationButtons: 'false',
  elements: [
    {
      type: 'panel',
      elements: [
        {
          type: 'text',
          name: 'productName',
          title: 'Quel est le nom de votre produit ?',
        },
      ],
    },
    {
      type: 'panel',
      elements: [
        {
          type: 'dropdown',
          name: 'stage',
          title: 'Dans quelle phase est actuellement votre projet ?',
          choices: [
            'Idéation',
            'Maquettage',
            'Prototypage',
            'Développement',
            'En production (avec beta-testeurs)',
            'En production (sans restriction)',
            'Produit arrêté',
          ],
        },
        {
          type: 'comment',
          name: 'stageNotes',
          title: 'Notes',
          hideNumber: true,
          state: 'collapsed',
        },
      ],
    },
    {
      type: 'panel',
      elements: [
        {
          type: 'radiogroup',
          name: 'test',
          title: 'Avez-vous vérifié si des solutions similaires existaient ?',
          description: '_[(En savoir plus)](https://sillon.incubateur.net/docs/project-start/is-your-project-new/)_',
          choices: [
            { value: true, text: 'Oui', indicator: 'green' },
            { value: false, text: 'Non', indicator: 'orange' },
            // { value: true, text: '<span style="color: green">**Oui _(suit nos recommandations)_**</span>', indicator: 'green' },
            // // TODO: better, change the panel color so it's easier to find out which one is wrong
            // { value: false, text: '<span style="color: orange">**Non _(ne suit pas nos recommandations)_**</span>', indicator: 'orange' },
          ],
          showClearButton: true,
        },
        {
          type: 'comment',
          name: 'testNotes',
          title: 'Notes',
          hideNumber: true,
          state: 'collapsed',
        },
      ],
    },
  ],
};

interface ProductEvaluationProps {}

export function ProductEvaluation(props: ProductEvaluationProps) {
  const [open, setOpen] = useState<boolean>(() => true);
  const [resultsDisplayed, setResultsDisplayed] = useState<boolean>(() => false);
  const [resultsFilter, setResultsFilter] = useState<Set<Indicator>>(() => new Set<Indicator>(['none', 'green', 'orange', 'red']));
  const [resultsCount, setResultsCount] = useState<{ [key in Indicator]: number }>(() => ({
    none: 0,
    green: 0,
    orange: 0,
    red: 0,
  }));
  const [converter] = useState<Converter>(
    () =>
      new Converter({
        openLinksInNewWindow: true,
      })
  );
  const [survey] = useState<Model>(() => new Model(surveyJson));

  const toggleResultsFilter = useCallback(
    (indicator: Indicator) => {
      if (resultsFilter.has(indicator)) {
        resultsFilter.delete(indicator);
      } else {
        resultsFilter.add(indicator);
      }

      setResultsFilter(new Set(resultsFilter));
    },
    [resultsFilter, setResultsFilter]
  );

  const updatePanelDisplay = useCallback(
    (panel: PanelModel) => {
      const panelHtmlElement = panel.getWrapperElement();

      if (panelHtmlElement) {
        let indicator: Indicator = 'none';

        for (const element of panel.elements) {
          if (element instanceof QuestionRadiogroupModel) {
            for (const choice of element.choices as ItemValue[]) {
              if (element.value === choice.value) {
                const choiceIndicator = (choice as any).jsonObj.indicator;

                if (!!choiceIndicator) {
                  indicator = choiceIndicator;
                }
              }
            }

            console.log(element);

            const htmlElement = element.getWrapperElement();

            if (htmlElement) {
              // console.log(htmlElement);
              // htmlElement.style.borderLeft = '20px red solid';
            }
          } else if (element instanceof QuestionCheckboxModel) {
            // TODO
          }

          break;
        }

        (panel as any)._indicator = indicator;

        if (resultsDisplayed) {
          let color;
          switch (indicator) {
            case 'green':
              color = 'var(--ifm-color-success)';
              break;
            case 'orange':
              color = 'var(--ifm-color-warning)';
              break;
            case 'red':
              color = 'var(--ifm-color-danger)';
              break;
            default:
              color = 'var(--ifm-color-secondary)';
              break;
          }

          // TODO:
          // TODO:
          // TODO: looking at result, uncheck orange, check orange, change value of boolean ... it will disappear (orange will not be in the array)
          // maybe due to propagation across useCallback/useEffect?
          // TODO:
          // TODO:
          console.log(indicator);
          console.log(resultsFilter);

          panelHtmlElement.style.borderLeft = `20px ${color} solid`;
          panelHtmlElement.style.display = resultsFilter.has(indicator) ? 'block' : 'none';
        } else {
          panelHtmlElement.style.borderLeft = 'none';
          panelHtmlElement.style.display = 'block';
        }
      }
    },
    [resultsDisplayed, resultsFilter]
  );

  const surveyComplete = useCallback((survey) => {
    const submissionId: string = '1'; // Only one for now
    survey.setValue('submissionId', submissionId);

    // TODO: save answer, or save at each update
  }, []);

  const surveyValueChanged = useCallback(
    (sender: SurveyModel, options: ValueChangedEvent) => {
      // If by default we set a collapsing state to this question adjust the display
      if ((options.question as any).jsonObj.state !== undefined) {
        if (options.value !== '') {
          !options.question.isExpanded && options.question.expand();
        } else {
          options.question.isExpanded && options.question.collapse();
        }
      }

      // Adjust results when answer changes
      if (options.question.parent instanceof PanelModel) {
        updatePanelDisplay(options.question.parent);
      }

      // Recompute all counters (to not mess with little diff)
      const panels = survey.getAllPanels();
      const newResultsCount: typeof resultsCount = {
        none: 0,
        green: 0,
        orange: 0,
        red: 0,
      };

      for (const panel of panels) {
        if (panel instanceof PanelModel) {
          const computedIndicator = (panel as any)._indicator;

          if (!!computedIndicator) {
            newResultsCount[computedIndicator]++;
          }
        }
      }

      setResultsCount(newResultsCount);

      // TODO: this should be done when setting up the saved object
    },
    [resultsDisplayed, setResultsCount]
  );

  const surveyTextMarkdown = useCallback((survey, options) => {
    // Convert the markdown text to html
    var str = converter.makeHtml(options.text);

    // Remove root paragraphs <p></p>
    str = str.substring(3);
    str = str.substring(0, str.length - 4);

    // Set html
    options.html = str;
  }, []);

  survey.onComplete.add(surveyComplete);
  survey.onValueChanged.add(surveyValueChanged);
  survey.onTextMarkdown.add(surveyTextMarkdown);

  useEffect(() => {
    const panels = survey.getAllPanels();

    for (const panel of panels) {
      if (panel instanceof PanelModel) {
        updatePanelDisplay(panel);
      }
    }
  }, [survey, resultsDisplayed, resultsFilter]);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <button
          className="button button--primary button--lg"
          onClick={() => {
            setOpen(true);
          }}
          style={{
            margin: '30px auto',
          }}
        >
          {!!true ? `Commencer l'évaluation` : `Reprendre l'évaluation`}
        </button>
      </div>
      <BrowserOnly>
        {() => {
          return (
            <div>
              <Modal
                id="product-evaluation-modal"
                appElement={document.body}
                isOpen={open}
                style={{
                  content: {
                    width: '90%',
                    maxWidth: '1200px',
                    maxHeight: '90%',
                    backgroundColor: 'transparent',
                    padding: 0,
                    border: 0,
                    borderRadius: 0,
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                  },
                  overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 20000,
                  },
                }}
              >
                <div style={{ width: '100%', height: '100%', background: 'var(--ifm-color-secondary-lightest)' }}>
                  <div>
                    <div className="padding-right--lg padding-bottom--lg padding-left--lg">
                      <div>
                        <div
                          style={{
                            background: 'var(--ifm-color-secondary-lightest)',
                            position: 'sticky',
                            top: 0,
                            zIndex: 20001,
                            padding: '1rem 0',
                          }}
                        >
                          <h1
                            style={{
                              margin: 0,
                              display: 'flex',
                            }}
                          >
                            Évaluation&nbsp;
                            <button
                              className="button button--primary"
                              onClick={() => {
                                setResultsDisplayed(!resultsDisplayed);
                              }}
                              style={{
                                marginLeft: 'auto',
                              }}
                            >
                              <FontAwesomeIcon icon={!resultsDisplayed ? faEye : faEyeSlash} className="margin-right--sm" />
                              {!resultsDisplayed ? `Afficher les résultats` : `Cacher les résultats`}
                            </button>
                            {!!resultsDisplayed && (
                              <>
                                &nbsp; {resultsCount.green} 🟢 {resultsCount.orange} 🟠 {resultsCount.red} 🔴
                              </>
                            )}
                            <button
                              onClick={() => {
                                setOpen(false);
                              }}
                              className="button button--secondary"
                              style={{
                                marginLeft: '1rem',
                                background: 'none',
                                border: 'none',
                              }}
                            >
                              <FontAwesomeIcon icon={faXmark} size="xl" />
                            </button>
                          </h1>
                          {!!resultsDisplayed && (
                            <div style={{ marginTop: '1rem' }}>
                              Afficher les résultats : &nbsp;
                              <input
                                id="greyResults"
                                type="checkbox"
                                className="screen-reader-only"
                                aria-label="faire apparaître/disparaître les résultats neutres"
                                checked={resultsFilter.has('none')}
                                onChange={() => {
                                  toggleResultsFilter('none');
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    toggleResultsFilter('none');
                                  }
                                }}
                              />
                              <label htmlFor="greyResults">Neutres</label>
                              &nbsp;
                              <input
                                id="greenResults"
                                type="checkbox"
                                className="screen-reader-only"
                                aria-label="faire apparaître/disparaître les résultats verts"
                                checked={resultsFilter.has('green')}
                                onChange={() => {
                                  toggleResultsFilter('green');
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    toggleResultsFilter('green');
                                  }
                                }}
                              />
                              <label htmlFor="greenResults">Verts</label>
                              &nbsp;
                              <input
                                id="orangeResults"
                                type="checkbox"
                                className="screen-reader-only"
                                aria-label="faire apparaître/disparaître les résultats oranges"
                                checked={resultsFilter.has('orange')}
                                onChange={() => {
                                  toggleResultsFilter('orange');
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    toggleResultsFilter('orange');
                                  }
                                }}
                              />
                              <label htmlFor="orangeResults">Oranges</label>
                              &nbsp;
                              <input
                                id="redResults"
                                type="checkbox"
                                className="screen-reader-only"
                                aria-label="faire apparaître/disparaître les résultats rouges"
                                checked={resultsFilter.has('red')}
                                onChange={() => {
                                  toggleResultsFilter('red');
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    toggleResultsFilter('red');
                                  }
                                }}
                              />
                              <label htmlFor="redResults">Rouges</label>
                            </div>
                          )}
                        </div>
                        <div>
                          <Survey model={survey} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          );
        }}
      </BrowserOnly>
    </>
  );
}
