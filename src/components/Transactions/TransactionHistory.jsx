import PropTypes from 'prop-types';
import { theme } from 'theme';
import { Box } from '../Box';

import {
  TableTransactions,
  TableHeadRow,
  TableHeadColumn,
  TableBodyRow,
  TableBodyColumn,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Box
      as={theme.as.s}
      display={theme.display.f}
      flexDirection='column'
      gridGap={theme.space[2]}
      width={theme.space[11]}
      bg={theme.colors.bgSection}
      my={theme.space[5]}
      mx={theme.position.a}
      p={theme.space[2]}
    >
      <TableTransactions>
        <thead>
          <TableHeadRow>
            <TableHeadColumn>TYPE</TableHeadColumn>
            <TableHeadColumn>AMOUNT</TableHeadColumn>
            <TableHeadColumn>CURRENCY</TableHeadColumn>
          </TableHeadRow>
        </thead>
        <tbody>
          {items.map(({ type, amount, currency, id }, index) => (
            <TableBodyRow  key={id}>
              <TableBodyColumn>{ucFirst(type)}</TableBodyColumn>
              <TableBodyColumn>{amount}</TableBodyColumn>
              <TableBodyColumn>{currency}</TableBodyColumn>
            </TableBodyRow>
          ))}
        </tbody>
      </TableTransactions>
    </Box>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}