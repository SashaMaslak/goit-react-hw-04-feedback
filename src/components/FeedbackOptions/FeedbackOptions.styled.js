import styled from 'styled-components';

export const FeedbackBox = styled.div`
   display: ${p => p.theme.display.f};
   justify-content: ${p => p.theme.position.c};
   gap: ${p => p.theme.space[3]}px;
   margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Button = styled.button`
   width: ${p => p.theme.space[7]}px;
   font-size: ${p => p.theme.fontSizes.l};
   border-radius: ${p => p.theme.space[3]}px;
   :hover {
      background-color: ${p => p.theme.colors.accentLight};
   }
`;