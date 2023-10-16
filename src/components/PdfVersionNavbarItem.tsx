import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Props as DefaultNavbarItemProps } from '@theme/NavbarItem/DefaultNavbarItem';
import React from 'react';

export interface PdfVersionNavbarItemProps extends DefaultNavbarItemProps {
  readonly value: string;
}

export default function PdfVersionNavbarItem(props: PdfVersionNavbarItemProps): JSX.Element {
  const className = 'button button--secondary margin-horiz--sm hide-on-small';
  const buttonContent = (
    <>
      <FontAwesomeIcon icon={faFileLines} className="margin-right--sm" />
      PDF
    </>
  );

  if (ExecutionEnvironment.canUseDOM && window.location.hostname === 'localhost') {
    return (
      <button
        onClick={() => {
          window.alert('The PDF version is only available on the published website');
        }}
        className={className}
      >
        {buttonContent}
      </button>
    );
  } else {
    return (
      <a href="/assets/sillon.pdf" className={className}>
        {buttonContent}
      </a>
    );
  }
}
