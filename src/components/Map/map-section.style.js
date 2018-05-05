import styled from "styled-components";

const TopHeight = "80px";
export const Wrapper = styled.div`
  background: grey;
  height: 100%;
  width: 100%;
  position: relative;

  .failed{
    background: whitesmoke;
    height: 100%;
    width: 100%;
    display: table;
    h1{
      text-align: center;
      margin: 0;
      display: table-cell;
      width: 100%;
      vertical-align: middle;
      font-size: 30px;
      font-weight: 300;
    }
  }
  #search-section {
    height: ${TopHeight};

    #text-column {
      height: 100%;
      display: table;
      text-align: center;

      p {
        margin: 0;
        color: white;
        background: #2d9cdb;
        height: 100%;
        font-size: 20px;
        display: table-cell;
        vertical-align: middle;
      }
    }

    #auto-suggest-column {
      z-index: 1;
      .geosuggest__suggests--hidden {
        max-height: 0;
        overflow: hidden;
        border-width: 0;
      }

      height: 100%;
      position: relative;
      #marker {
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 20px;
        height: 35px;
      }
      input {
        width: 100%;
        height: 80px;
        border: 0;
        padding: 0 0px 0 80px;
        font-style: italic;
        font-weight: 600;
        line-height: normal;
        font-size: 25px;
        color: rgba(79, 79, 79, 0.8);
        background: #f0f0f0;
      }

      ul {
        list-style-type: none;
        background: white;
        padding: 0;
        margin: 0;
        border-left: 1px solid #eee;
        border-bottom: 1px solid #eee;
        border-bottom-left-radius: 6px;

        li {
          padding: 15px 25px;
          cursor: pointer;

          &:hover {
            color: white;
            background: #2d9cdb;
          }
          & + li {
            border-top: 1px solid #eee;
          }
        }
      }
    }
  }

  #map-section {
    height: calc(100% - ${TopHeight});
    width: 100%;
  }

  
`;
