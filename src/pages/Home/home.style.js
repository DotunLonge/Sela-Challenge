import styled from "styled-components";

export default styled.div`
  height: 100%;
  overflow: auto;
  footer {
    padding: 20px 5%;

    .break {
      display: block;
      margin: 10px 0;
      width: 100%;
      border: 0.5px solid rgba(167, 167, 167, 0.3);
    }

    #text-below {
      font-family: Nunito;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-size: 24px;
      text-align: center;
      color: #000000;
      opacity: 0.3;
    }
  }
`;
