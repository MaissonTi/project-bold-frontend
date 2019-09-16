import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  button {
    border-radius: 30px;
  }
`;

export const ModalDiv = styled.div`
  .row {
    display: flex;
    align-items: center;
  }
`;

export const Content = styled.div`
  text-align: center;

  form {
    > div {
      display: flex;
      flex-direction: column;
      margin-top: 30px;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 15px;
      margin-bottom: 10px;
    }

    input {
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
    }

    textarea {
      resize: vertical;
      height: 85px !important;
    }

    span {
      color: red;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      width: 400px;
      text-transform: none;
      margin-top: 12px;
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
