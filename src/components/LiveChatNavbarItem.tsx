import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Props as DefaultNavbarItemProps } from '@theme/NavbarItem/DefaultNavbarItem';
import { Crisp } from 'crisp-sdk-web';
import React from 'react';
import { useEffectOnce } from 'usehooks-ts';

export interface LiveChatNavbarItemProps extends DefaultNavbarItemProps {
  readonly value: string;
}

export default function LiveChatNavbarItem(props: LiveChatNavbarItemProps): JSX.Element {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  useEffectOnce(() => {
    let sessionIdToResume: string | null = null;
    if (window) {
      const searchParams = new URLSearchParams(window.location.search);
      sessionIdToResume = searchParams.get('crisp_sid');
    }

    Crisp.configure(customFields.crispWebsiteId as string, {
      autoload: !!sessionIdToResume, // If the user comes from a Crisp email to reply to the session, we load Crisp and this one should handle retrieving previous session
      cookieExpire: 7 * 24 * 60 * 60, // Must be in seconds, currently 7 days instead of the default 6 months
      sessionMerge: true,
      locale: 'fr',
    });

    if (sessionIdToResume) {
      Crisp.chat.open();
    }

    return () => {
      // Crisp should allow us to destroy the instance
      // Ref: https://stackoverflow.com/questions/71967230/how-to-destroy-crisp-chat
    };
  });

  return (
    <button
      className="button button--secondary margin-horiz--sm"
      onClick={() => {
        Crisp.chat.open();
      }}
    >
      <FontAwesomeIcon icon={faComment} className="margin-right--sm" />
      Support
    </button>
  );
}
