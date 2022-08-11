import React from 'react';
import Notification from '../Notification/Notification';

import { StatBlock, StatsItem } from "./Stats.styled";

export const Stats = ({ good, neutral, bad, total, positivePercentage }) => (
   <StatBlock>
      {total === 0 ? (<Notification message="No feedback given" />) :
         (<div>
            <StatsItem>No feedback given</StatsItem>
            <StatsItem>Good: {good}</StatsItem>
            <StatsItem>Neutral {neutral}</StatsItem>
            <StatsItem>Bad: {bad}</StatsItem>
            <StatsItem>Total: {total}</StatsItem>
            <StatsItem>Positive feedback: {positivePercentage}</StatsItem>
         </div>)}
   </StatBlock>
);
