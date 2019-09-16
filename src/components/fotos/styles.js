import styled from 'styled-components';

export const Conteiner = styled.div`
  .panel {
    align-items: center;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(3, 0fr);
    position: relative;
    height: 526px;
    z-index: 2;
    margin-bottom: 35px;
  }

  .shapRow {
    position: absolute;
    height: 530px;
    width: 100%;
    background: black;
    top: 110px;
    left: 0;
  }

  .greenshock {
    position: relative;
    display: grid;
    width: 350px;
    height: 262px;
    z-index: 0px;
  }

  .shape {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #000;
    opacity: 0.5;
  }

  .img {
    width: 350px;
    height: 262px;
  }
`;
