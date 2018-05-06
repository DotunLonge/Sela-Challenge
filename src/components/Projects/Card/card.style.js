import styled from "styled-components";
import rightChevron from "../../../assets/icons/right-chevron.svg";
import colors from "../../../helpers/colors.json";

export const Wrapper = styled.div`
  .text-side {
    padding: 0 2.5%;
    position: relative;

    h3 {
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      font-size: 23px;
      margin: 30px 0 5px;
      color: #333333;
    }

    p.description {
      font-weight: 300;
      line-height: normal;
      font-size: 14.5px;
      color: #333333;
      margin: 30px 0;

      a {
        color: #1d9cdd;
      }
    }

    #break {
      border: 1px solid rgba(0, 0, 0, 0.2);
      margin-bottom: 12px;
    }

    .contractors-section {
      @media (min-width: 768px) {
        a {
          position: absolute;
          right: 2%;
          bottom: 7%;
          font-family: Nunito;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-size: 13px;
          color: #333333;
          background-image: url(${rightChevron});
          background-position: 90% center;
          background-size: contain;
          background-repeat: no-repeat;
          width: 47%;
          height: 30px;
          line-height: 30px;
        }
      }

      @media (max-width: 767px) {
        a {
          position: relative;
          bottom: 8px;
          left: 50%;
          font-family: Nunito;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-size: 13px;
          color: #333333;
          background-position: 105% center;
          background-size: contain;
          background-repeat: no-repeat;
          width: 47%;
          height: 30px;
          line-height: 30px;
          display: block;
        }
      }

      h4 {
        margin: 0 5px;
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        font-size: 16px;
        color: #333333;
      }

      img {
        height: 40px;
        width: 40px;
        margin-right: 10px;
      }
    }
    .location span,
    .budget span {
      display: inline-block;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      font-size: 13.5px;
      color: #333333;
    }
  }

  height: 100%;
  margin: 1% 0;

  .inner {
    overflow: auto;
    position: relative;
    background: #f2f2f2;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    width: 100%;
    min-height: 375px;

    .projectPicture {
      height: 375px;
      width: 100%;
      object-fit: cover;
      display: block;
    }

    > div {
      height: 100%;
      overflow: hidden;
      position: relative;
    }
    .top > img {
      height: 20px;
      width: 20px;
      object-fit: contain;
      position: relative;
      top: 6px;
      margin-right: 1.5px;
    }

    .projectStatus {
      position: absolute;
      top: 0;
      left: 0;
      background: ${props => colors[props.statusColor]};
      box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
      font-size: 15px;
      font-weight: 300;
      padding: 7px 15px;
      color: white;
      border-radius: 5px 0px;
    }

    .completionPercentage {
      bottom: 4%;
      left: 0;
      right: 0;
      overflow: hidden;
      margin: auto;
      text-align: center;
      background: white;
      width: 90%;
      position: absolute;
      background: #f2f2f2;
      box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      font-weight: 300;
      font-size: 14px;
    }
  }

  @media (min-width: 1042px) {
    .inner {
      width: 95%;
    }
    &:nth-child(odd) {
      .inner {
        float: left;
      }
    }

    &:nth-child(even) {
      .inner {
        float: right;
      }
    }
  }
`;

export const Percentage = styled.span`
  padding: 8px 0;
  &#blue {
    background-color: #2d9cdb;
    color: white;
    width: ${props => props.width}%;
    display: inline-block;
    float: left;
    height: 35px;
  }

  &#normal {
    background-color: white;
    color: #333333;
    width: calc(100% - ${props => props.width}%);
    display: inline-block;
    float: right;
    height: 35px;
  }
`;
