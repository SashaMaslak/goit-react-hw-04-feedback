import styled from 'styled-components';

export const Card = styled.div`
  width: ${p => p.theme.space[9]}px;
  margin: ${p => p.theme.position.a};
  text-align: ${p => p.theme.position.c};
  background-color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.big};
`;

export const Description = styled.div`
  margin-bottom: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[4]}px;;
`;

export const Avatar = styled.img`
  width: ${p => p.theme.space[7]}px;
  margin: ${p => p.theme.position.a};
  border-radius: ${p => p.theme.radii.round};
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Tag = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
`;

export const Location = styled.p`
  color: ${p => p.theme.colors.text};
`;

export const Stats = styled.ul`
  display: ${p => p.theme.display.g};
  grid-template-columns: 1fr 1fr 1fr;
  li {
    padding: ${p => p.theme.space[3]}px;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.bgCard};
    border-radius: ${p => p.theme.radii.big};
  }
`;

export const Label = styled.p`
  display: ${p => p.theme.display.f};
  flex-wrap: wrap;
  justify-content: ${p => p.theme.position.c};
  color: ${p => p.theme.colors.text};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Quantity = styled.p`
  display: ${p => p.theme.display.f};
  flex-wrap: wrap;
  justify-content: ${p => p.theme.position.c};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
