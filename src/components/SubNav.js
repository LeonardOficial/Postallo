import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { IndexLink } from "react-router";
import { Nav, NavItem, NavIndexLink } from "reactstrap";

import { exit } from "../actions/userActions";

@connect(
  (store)    => ({ user: store.user }),
  (dispatch) => ({ actions: bindActionCreators({ exit }, dispatch) })
)

export default class SubNav extends Component {

  exit = (e) => {
    this.props.actions.exit();
  }
  
  render() {
    return(
      <Nav class="sub-nav" navbar pills>
        <NavItem>
          <IndexLink to="/home" class="nav-link" activeClassName="active">
            <span class="fa fa-home" /> Home
          </IndexLink>
        </NavItem>
        
        <NavItem>
          <IndexLink to="/home/perfil" class="nav-link" activeClassName="active">
            <span class="fa fa-user-circle-o" /> Perfil
          </IndexLink>
        </NavItem>
                
        <NavItem>
          <IndexLink to="/home/chat" class="nav-link" activeClassName="active">
            <span class="fa fa-comments-o" /> Chat
          </IndexLink>
        </NavItem>
        
        <NavItem>
          <IndexLink to="/home/settings" class="nav-link" activeClassName="active">
            <span class="fa fa-cog" /> Settings
          </IndexLink>
        </NavItem>
        
        <NavItem>
          <IndexLink to="/" onClick={this.exit} class="nav-link">
            <span class="fa fa-sign-out" /> Exit
          </IndexLink>
        </NavItem>
      </Nav>
    );
  }
}






