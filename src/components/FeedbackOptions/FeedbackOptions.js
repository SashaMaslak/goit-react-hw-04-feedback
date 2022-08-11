import React from 'react';

import { Button, FeedbackBox } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback, }) => (
   <FeedbackBox>
      {options.map(option => (
         <Button
            type="button"
            onClick={onLeaveFeedback}
            name={option}
            key={{ option }}
         >
            {option}
         </Button>
      ))}
   </FeedbackBox>
);
