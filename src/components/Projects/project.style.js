import styled from "styled-components";

import Chevron from "../../assets/icons/chevron.svg";
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

  ul {
    padding: 0;
    width: 100%;
    overflow: hidden;
    border: 1px solid #2d9cdb;
    box-sizing: border-box;
    border-radius: 5px;

    li {
      display: inline-block;

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
