import styled from 'styled-components';

export const TableTransactions = styled.table`
  width: ${p => p.theme.space[10]}px;
  margin:  ${p => p.theme.space[3]}px ${p => p.theme.position.a};
  text-align: ${p => p.theme.position.c};
  border-collapse: collapse;
`;

export const TableHeadRow = styled.tr`
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
`;

export const TableHeadColumn = styled.th`
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.tableLine};
  padding: ${p => p.theme.space[3]}px;
`;

export const TableBodyRow = styled.tr`
  :nth-child(even) {
    background-color: ${p => p.theme.colors.bgCard};
  }
  :nth-child(odd) {
    background-color: ${p => p.theme.colors.white};
  }
  color: ${p => p.theme.colors.text};
`;

export const TableBodyColumn = styled.td`
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.tableLine};
  padding: ${p => p.theme.space[2]}px;
`;
