import styled from 'styled-components';

export const Title = styled.h2`
   font-size: ${p => p.theme.fontSizes.xl};
   color: ${p => p.theme.colors.text};
   text-align: ${p => p.theme.position.c};
   margin-bottom: ${p => p.theme.space[5]}px;
   color: ${p => p.theme.colors.accent};
`;

export const Stats = styled.div`
`;

export const TitleStats = styled.div`
   font-size: ${p => p.theme.fontSizes.xl};
   color: ${p => p.theme.colors.text};
   margin-bottom: ${p => p.theme.space[5]}px;
`;

export const StatsItem = styled.p`
   margin-bottom: ${p => p.theme.space[3]}px;
   font-size: ${p => p.theme.fontSizes.l};
`;

