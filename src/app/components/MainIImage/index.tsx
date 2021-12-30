/**
 *
 * MainImage
 *
 */
import * as React from 'react';
/* fixture */
import { homepage } from 'fixtures/homepage';

interface Props {
  readonly url?: string;
  readonly alt?: string;
  readonly width?: string;
  readonly height?: string;
  readonly minWidth?: string;
  readonly minHeight?: string;
  readonly margin?: string;
  readonly padding?: string;
  readonly borderRadius?: string;
  readonly top?: number;
  readonly bottom?: number;
  readonly left?: number;
  readonly right?: number;
}

export function MainImage(props: Props) {

  return (
    <img 
        src={props.url || homepage.urlImageIllustration}
        alt={props.alt || "Image team service working"}
        {...props}

        style={{
          width: props.width || '50%',
          height: props.height || 'auto',
          margin: props.margin || '0 0 0 0',
          padding: props.padding || '0 0 0 0',
          borderRadius: props.borderRadius || '0',
          ...props
        }}
    />);
}


