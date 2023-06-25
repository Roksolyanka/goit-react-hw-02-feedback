import React from 'react';
import { Title } from './Title.styled';
import { SectionStyled } from './SectionStyled.styled';

export const Section = ({ title, children }) => (
  <SectionStyled>
    <Title>{title}</Title>
    {children}
  </SectionStyled>
);
