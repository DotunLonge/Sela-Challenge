import React, { Component } from "react";
import Map from "../../components/Map";
import Wrapper from "./home.style";
import Header from "../../components/Header";
import HeroBackground from "../../assets/background.svg";
import Projects from "../../components/Projects";
import {connect} from 'react-redux';
import {fetch} from "../../store/actionCreators/project";

class Home extends Component {

  componentWillMount(){
    this.props.dispatch(fetch());
  }
  
  render() {
    return (
      <Wrapper className="xs-12">
        <Header backgroundSrc={HeroBackground} />
        <Map />
        <Projects />

        <footer>
          <div className="break"/>
          <p id="text-below">
          (c) Sela. 2018
          </p>
        </footer>
      </Wrapper>
    );
  }
}



export default connect()(Home);
