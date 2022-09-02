import React from 'react';

import { Button, FeedbackBox } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
   
  return (
    <FeedbackBox>
      {options.map(option => (
        <Button
          type="button"
          onClick={onLeaveFeedback}
          name={option}
          key={option}
        >
          {option}
        </Button>
      ))}
    </FeedbackBox>
  );
}
