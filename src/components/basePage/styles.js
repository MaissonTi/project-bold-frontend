import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-bottom: 50px;

  ${props =>
    props.home
      ? css`
          transform: matrix(1, 0, 0, 1, 0, 0);
        `
      : css`
          transform: none;
        `}
`;

export const Position = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-font-smoothing: antialiased;
`;
