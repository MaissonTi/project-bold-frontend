import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-bottom: 30px !important;
  h5 {
    font-weight: bold;

    text-align: justify;
  }
`;

export const Situacao = styled.span`
  background: ${props => (props.has ? '#30f900' : '#eee')};
  color: #333;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 800;
  padding: 10px 10px;
  margin-left: 10px;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: bold;
  }
`;

export const Person = styled.div`
  margin-bottom: 30px;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    svg {
      background: black;
      color: white;
      border-radius: 50%;
      margin-right: 10px;
    }

    h5 {
      margin: 0;
    }
  }
`;

export const Video = styled.div`
  display: flex;
  justify-content: center;

  height: 200px;
  position: relative;

  img {
    width: 100%;
    margin: 0 30px;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    background: #0000008a;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: #c3c3c3;
      width: 120px;
      height: 120px;
      cursor: pointer;

      &:hover {
        color: #fff;
      }
    }
  }

  p {
  }
`;

export const ModalDiv = styled.div`
  background: none !important;
`;
