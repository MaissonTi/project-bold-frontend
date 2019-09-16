import styled from 'styled-components';

export const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;

    li {
      margin: 0 20px;
      font-size: 22px;
    }
  }
`;

export const NavUser = styled.div`
  display: flex;
  flex-direction: row-reverse;

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    text-transform: capitalize;
    font-weight: 600;
  }

  svg {
    border-radius: 50px;
    background: black;
    color: white;
    padding-bottom: 5px;
    margin-left: 7px;
  }

  a.sair {
    background: none;
    box-shadow: none;
    border: none;
    color: #0000e2;
    font-size: 20px;
    height: 0px;
    margin: -12px 0 0px 33px;
  }
`;
