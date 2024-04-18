import React, { useCallback, useState } from 'react';
import { Converter } from 'showdown';
import { Model, Question, surveyLocalization } from 'survey-core';
import 'survey-core/defaultV2.min.css';
import 'survey-core/i18n/french';
import { Survey } from 'survey-react-ui';

surveyLocalization.currentLocale = 'fr';

const surveyJson = {
  // TODO: progressBar counts "notes"...
  // TODO: with an helper, if value is not empty, set "expanded" instead of "collapsed", or through onValueChanged
  // TODO: add a toggle (show answers) to update all answers with right choice
  // TODO: have a sticky block with a resume (X green, Y orange, Z red) avec des liens "anchor" pour aller direct sur les bonnes ?
  // TODO: display a note ? "4.23/5" of matching with Sillon recommandations (should only take into account questions not cleared)
  // TODO: the idea to not show result is so people can go fast answering and using what they really think (otherwise it would take too long)
  showProgressBar: 'auto',
  progressBarType: 'questions',
  elements: [
    {
      type: 'text',
      name: 'productName',
      title: 'Quel est le nom de votre produit ?',
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
            { value: true, text: '<span style="color: green">**Oui _(suit nos recommandations)_**</span>', indicator: 'green' },
            { value: false, text: '<span style="color: red">**Non _(ne suit pas nos recommandations)_**</span>', indicator: 'orange' },
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
  const [converter] = useState<Converter>(
    () =>
      new Converter({
        openLinksInNewWindow: true,
      })
  );

  const survey = new Model(surveyJson);

  const surveyComplete = useCallback((survey) => {
    const submissionId: string = '1'; // Only one for now
    survey.setValue('submissionId', submissionId);

    // TODO: save answer, or save at each update
  }, []);

  const surveyValueChanged = useCallback((sender: never, options: { name: string; question: Question; value: any }) => {
    // If by default we set a collapsing state to this question adjust the display
    if ((options.question as any).jsonObj.state !== undefined) {
      if (options.value !== '') {
        !options.question.isExpanded && options.question.expand();
      } else {
        options.question.isExpanded && options.question.collapse();
      }
    }

    // TODO: this should be done when setting up the saved object

    // TODO: ...
    if ((options.question as any).jsonObj.type === 'radiogroup') {
      console.log(222222);
      console.log(options);
      // options.question.get
    }
  }, []);

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

  return <Survey model={survey} />;
}
