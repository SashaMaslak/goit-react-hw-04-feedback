import React from 'react';
import PropTypes from "prop-types";
import { theme } from "theme";
import { Box } from "../Box";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Stats } from './Stats/Stats';

import {
  Title,
  TitleStats,
} from "./Statistics.styled";

export class Statistics extends React.Component {
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  }

  handleAddGood = (e) => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  }

  handleAddNeutral = (e) => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  }

  handleAddBad = (e) => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
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
        <Title>Please leave feedback</Title>
        <FeedbackOptions
          onAddGood={this.handleAddGood}
          onAddHeutral={this.handleAddNeutral}
          onAddBad={this.handleAddBad} />
        <TitleStats>Statistics:</TitleStats>
        <Stats
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedback()}/>
      </Box>
    );
  }
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
