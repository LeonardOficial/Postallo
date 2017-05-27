import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import PerfilNav from "../components/PerfilNav";
import PerfilTable from "../components/PerfilTable";
import PostsHolder from "../components/PostsHolder";

import { changeUser } from "../actions/userActions";

@connect(
  (store)    => ({ user: store.user, posts: store.posts }),
  (dispatch) => ({ actions: bindActionCreators({ changeUser }, dispatch) })
)

export default class PerfilPage extends Component {

  state = { active: 1 }
  
  change = (n) => {
    this.setState({active: n});
  }
  
  render() {
    var Section = null;
    switch(this.state.active) {
      case 1: { 
        Section = <PerfilTable user={this.props.user} change={this.props.actions.changeUser} />;
        break;
      }
      case 2: {
        Section = <h2>not implemented yet U.U</h2>;
        break;
      }
      case 3: { 
        Section = <h2>not implemented yet U.U</h2>;
        break;
      }
      case 4: { 
        Section = <PostsHolder posts={this.props.posts} />
        break;
      }
    }
    return(
      <div class="perfil-page">
        <img class="user-img" />
        <PerfilNav active={this.state.active} change={this.change} />
        <div class="section-holder">
          { Section }
        </div>
      </div>
    );
  }
}





