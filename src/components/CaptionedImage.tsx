import Link from '@docusaurus/Link';
import React, { CSSProperties } from 'react';

interface CaptionedImageProps {
  src: string;
  alt: string;
  caption?: string;
  source?: string;
  style?: CSSProperties;
}

export function CaptionedImage({ src, alt, caption, source, style }: CaptionedImageProps) {
  return (
    <figure>
      <img src={src} alt={alt} style={style} />
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
