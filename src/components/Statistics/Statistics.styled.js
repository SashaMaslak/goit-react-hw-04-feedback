import styled from 'styled-components';

export const Container = styled.section`
   background-color: ${p => p.theme.colors.white};
   display: ${p => p.theme.display.f};
   flex-direction: column;
   align-items: ${p => p.theme.position.c};
   margin: ${p => p.theme.space[5]}px ${p => p.theme.position.a};
   padding: ${p => p.theme.space[5]}px ${p => p.theme.space[6]}px;
   border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
   border-radius: ${p => p.theme.radii.big};
`;

export const Title = styled.h2`
   color: ${p => p.theme.colors.text};
   margin-bottom: ${p => p.theme.space[5]}px;
`;

export const StatList = styled.ul`
   display: ${p => p.theme.display.g};
   gap: ${p => p.theme.space[3]}px;
   justify-content: ${p => p.theme.position.c};
   grid-template-columns: repeat(5, ${p => p.theme.space[6]}px);
`;

export const Item = styled.li`
   padding: ${p => p.theme.space[4]}px;
   border-radius: ${p => p.theme.radii.normal};
   display: ${p => p.theme.display.f};
   gap: ${p => p.theme.space[3]}px;
   background-color: #${(p => p.bgc)};
   border: ${p => p.theme.borders.normal};
   flex-direction: column;
   align-items: ${p => p.theme.position.c};
`;

export const Label = styled.span`
   color: ${p => p.theme.colors.white};
`;

export const Percentage = styled.span`
   color: ${p => p.theme.colors.text};
   font-weight: ${p => p.theme.fontWeights.bold};
`;

