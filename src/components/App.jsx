import React from 'react';
import { theme } from "theme";
import { Box } from "./Box";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100)
  }

  render() {
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
          options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick} />
          </Section>
          <Section title={'Statistics'}>
            
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} />
          </Section>
      </Box>
    );
  }
};
