import React, { Component } from "react";
//import { bindActionCreators } from "redux";
//import { connect } from "react-redux";

import Nav from "./Nav";
import SubNav from "./SubNav";
import CollapseBox from "./CollapseBox";

import { Button, Input } from "reactstrap";


export default class App extends Component {

  state = {
    filter: {
      name:   "",
      title:  "",
      theme:  "",
      author: ""
    }
  }
  
  filter = (obj) => {
    this.setState({filter: obj});
  }
  
  render() {
    return(
      <div>
        <Nav filter={this.filter} />
    
        <CollapseBox>
          <SubNav />
        </CollapseBox>
      
        <div class="app-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}





