import { Box } from './Box';
import { Statistics } from './Statistics/Statistics';


export const App = () => {
  return (
      <Box as="section">
      <Statistics good={0} neutral={0} bad={0} total={0} persentage={0} />
      </Box>
  );
};
