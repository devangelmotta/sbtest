/**
 *
 * MainText
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
/* fixture */
import {  homepage } from 'fixtures/homepage';
interface Props {
  readonly text?: string;
}


export function MainText(props: Props) {
  return (
    <H1>
      {props.text || homepage.mainText}
    </H1>);
}

const H1 = styled.h1`

`;
