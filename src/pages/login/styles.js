import styled from 'styled-components';

export const Container = styled.div`
  width: 960px;
  height: 500px;
  -webkit-font-smoothing: antialiased;
  margin: 0 auto;

  div.env {
    position: relative;
    z-index: 10;
  }

  div.envFace {
    position: absolute;
    width: 100%;
    height: 500px;
    padding: 30px;
    /*overflow:hidden;*/
  }

  .row {
    display: flex;
    align-items: center;
    height: 100%;
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

      margin: 0 0 10px;
      padding: 0px 10px !important;
      box-sizing: border-box;

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        -webkit-text-fill-color: black;
        -webkit-box-shadow: 0 0 0px 1000px #fff inset;
      }
    }

    span {
      margin-bottom: 14px !important;
      display: block;
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

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;

      button {
        text-transform: none;
        border-radius: 30px;
        margin: 0px 20px;
        width: 200px;
      }

      button.white {
        background: white !important;
        border: 2px solid red;
        color: red;
        font-weight: bold;
        padding-bottom: -9px;
        line-height: 0px;
      }

      button.white-lack {
        background: none;
        box-shadow: none;
        color: red;
        font-size: 16px;
        font-weight: bold;
        text-decoration: underline;
      }
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
