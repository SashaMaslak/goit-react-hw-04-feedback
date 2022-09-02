import { useState } from 'react';
import { theme } from 'theme';
import { Box } from './Box';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const variantsOfFeedback = { good, neutral, bad };

  const handleClick = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };
  return (
    <Box
      width={theme.space[11]}
      bg={theme.colors.bgSection}
      my={theme.space[5]}
      mx={theme.position.a}
      px={theme.space[5]}
      py={theme.space[6]}
    >
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(variantsOfFeedback)}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </Box>
  );
}
