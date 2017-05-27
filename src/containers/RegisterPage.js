import React, { Component } from "react";
import { Form } from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { registerUser } from "../actions/userActions";

import Step1 from "../components/register/Step1";
import Step2 from "../components/register/Step2";

@connect(
  (store)    => ({ user: store.user }),
  (dispatch) => ({ actions: bindActionCreators({ registerUser }, dispatch) })
)
export default class RegisterPage extends Component {

  state = { step: 1 }
  
  jump = (e) => {
  
  }
  
  cancel = (e) => {
  
  }
  
  submit1 = (obj) => {
    this.props.actions.registerUser(obj).then(
      () => {
        this.setState({step: 2});
      }
    );
  }
  
  submit2 = (e) => {
    e.preventDefault();
    alert("submit 2");
  }

  render() {
    return(
      <div class="login-holder">
        <div class="logo">
          <span>mobile</span>
          <img src="logo.png"/> Postallo
        </div>
        { this.state.step == 1 ? <Step1 submit={this.submit1} cancel={this.cancel} /> : <Step2 submit={this.submit2} jump={this.jump} /> }
      </div>
    );
  }
  
}




