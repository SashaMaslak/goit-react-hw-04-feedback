import PropTypes from "prop-types";
import { theme } from "theme";
import { Box } from "../Box";

import {
  Container,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      as={theme.as.s}
      width={theme.space[11]}
      bg={theme.colors.bgSection}
      my={theme.space[5]}
      mx={theme.position.a}
      px={theme.space[5]}
      py={theme.space[6]}
    >
      <Container>
        <Title>{title}</Title>
        <StatList>
          {stats.map(({ id, label, percentage }) => (
            <Item key={id} bgc={randomColorFunc}>
              <Label> {label}</Label>
              <Percentage>{percentage}</Percentage>
            </Item>
          ))}
        </StatList>
      </Container>
    </Box>
  );
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

function randomColorFunc() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
