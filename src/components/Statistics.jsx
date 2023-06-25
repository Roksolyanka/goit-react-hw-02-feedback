import React from 'react';
import { Options } from './Options.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <Options>Good: {good}</Options>
    <Options>Neutral: {neutral}</Options>
    <Options>Bad: {bad}</Options>
    <Options>Total: {total}</Options>
    <Options>Positive feedback: {positivePercentage}%</Options>
  </div>
);

export default Statistics;
