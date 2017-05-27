import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import { Link } from "react-router";
import { Row, Col, Form, FormGroup, Button, Input, Label } from "reactstrap";

import { login  } from "../actions/userActions";

@connect(
  (store)    => ({ user: store.user }),
  (dispatch) => ({ actions: bindActionCreators({ login }, dispatch) })
)

export default class SignInPage extends Component {

  state = {
    showPassword: false
  }
  
  componentDidMount() {
    this.props.actions.login().then(data => {
      alert(JSON.stringify(data));
      if(data.status == "logged") {
        browserHistory.push("/home");
      }
      
    });
  }
  
  change = (tag, e) => {
    this.setState({ [tag]: e.target.value });
  }
  
  submit = (e) => {
    e.preventDefault();
    
    this.props.actions.login({
      name: this.state.name,
      pass: this.state.pass
    }).then((data) => {
      //alert(JSON.stringify(data));
      if(data.status == "logged") {
        browserHistory.push("/home");
      } else {
        alert("user not found!");
      } 
    });
  }
  
  togglePassword = () => {
    this.setState({showPassword: !this.state.showPassword});
  }

  render() {
    return(
      <div class="login-holder">
        <div class="logo">
          <span>mobile</span>
          <img src="/logo.png"/> Postallo
        </div>
        <Form class="container" onSubmit={this.submit}>
          <FormGroup>
            <Label for="nickname">nickname</Label>
            <Input class="coz-input" onChange={this.change.bind(this, "name")} value={this.state.name} type="text" size="lg" placeholder="fulano"/>
          </FormGroup>
          <FormGroup>
            <Label for="password">password</Label>
            <Row>
              <Col xs="10">
                <Input class="coz-input" onChange={this.change.bind(this, "pass")} value={this.state.pass} type={ this.state.showPassword ? "text" : "password"} size="lg" />
              </Col>
              <Col xs="2" class="show-pass coz-form-input" onClick={this.togglePassword}>
                <span class={`fa fa-${ this.state.showPassword ? "eye-slash" : "eye" }`} />
                <p>{ this.state.showPassword ? "hide" : "show" }</p>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup row>
            <Col xs="12">
              <Button type="submit" class="coz-btn" size="lg" color="danger">sign in</Button>
            </Col>
            <Col xs="6">
              <Link to="/register"><Button class="coz-btn" type="button">sign up</Button> </Link>
            </Col>
            <Col xs="6">
              <Button class="coz-btn">recovery</Button>
            </Col>            
          </FormGroup>
        </Form>
      </div>
    );
  }
}






