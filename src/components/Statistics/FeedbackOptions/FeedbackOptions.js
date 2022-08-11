import React from 'react';

import { Button, FeedbackBox } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ onAddGood, onAddHeutral, onAddBad }) => (
   <FeedbackBox>
               <Button
                  type="button"
                  onClick={onAddGood}>Good
               </Button>
               <Button
                  type="button"
                  onClick={onAddHeutral}>Neutral
               </Button>
               <Button
                  type="button"
                  onClick={onAddBad}>Bad
      </Button>
   </FeedbackBox>
);
