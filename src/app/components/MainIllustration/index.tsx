/**
 *
 * MainIllustration
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

/* Custom components */
import { Container } from 'app/components/Container';
import { MainImage } from 'app/components/MainIImage';
import { MainText } from 'app/components/MainText';
/* fixtures */
import { homepage } from 'fixtures/homepage'

interface Props {}


export function MainIllustration(props: Props) {
  return (
    <Container
      background='linear-gradient(to right, #8e9eab, #eef2f3)'
      direction='row'
    >
      <article>
        <MainText />
        <MainText text={homepage.secondaryText}/>
      </article>
      
      <MainImage />
    </Container>
  );
}

