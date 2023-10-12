import Link from '@docusaurus/Link';
import React from 'react';

interface CaptionedImageProps {
  src: string;
  alt: string;
  caption?: string;
  source?: string;
}

export function CaptionedImage({ src, alt, caption, source }: CaptionedImageProps) {
  return (
    <figure>
      <img src={src} alt={alt} />
      {(!!caption || !!source) && (
        <figcaption
          style={{
            textAlign: 'center',
            fontSize: '0.9em',
          }}
        >
          {caption}
          {!!caption && !!source && ' '}
          {!!source && (
            <>
              (
              <Link href={source} style={{ fontStyle: 'italic' }}>
                source
              </Link>
              )
            </>
          )}
        </figcaption>
      )}
    </figure>
  );
}
