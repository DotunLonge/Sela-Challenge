import styled from "styled-components";

import Chevron from "../../assets/icons/chevron.svg";

export const Spinner = styled.div`

  margin: 100px auto;
  .spinner {
    margin: auto;
    width: 280px;
    text-align: center;
  }

  .spinner > div {
    width: 18px;
    height: 18px;
    margin: 0 3.5px;
    background-color: #C4C4C4;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

export const Wrapper = styled.div`
  padding: 5%;
  overflow: auto;
  h3 {
    font-family: Nunito;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    font-size: 22px;
    color: #333333;
  }
  #sort-by {
    background: white;
  }
  ul {
    padding: 0;
    width: 100%;
    overflow: hidden;
    border: 1px solid #2d9cdb;
    box-sizing: border-box;
    border-radius: 5px;

    li {
      display: inline-block;

      select {
        margin: 0;
        min-height: 48px;
      }
      select,
      button {
        appearance: none;
        border-radius: 0;
        background: tranparent;
        padding: 10px 20px;
        border: 0;
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        font-size: 16px;
        color: #333333;
        width: 100%;
        &.blue {
          background: #2d9cdb;
          color: white;
          background-image: url(${Chevron});
          background-repeat: no-repeat;
          background-position: 90% 50%;
          background-size: 18px;

          &:hover {
            background-color: #3b95c7;
          }
        }
      }
    }
  }
`;
