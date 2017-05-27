import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getUser } from "../actions/userActions";
import { addPost } from "../actions/postsActions";

import PostInput from "../components/PostInput";
import PostsHolder from "../components/PostsHolder";
import FullPost from "../components/FullPost";

@connect(
  (store) => ({ posts: store.posts }),
  (dispatch) => ({ actions: bindActionCreators({ addPost, getUser }, dispatch) })
)

export default class PostsPage extends Component {

  state = {
    isOpen: false,
    currentPost: null
  }
  
  componentDidMount() {
    this.props.actions.getUser();
  }

  static defaultProps = {
    posts: [],
    actions: {}
  }
  
  closePost = () => {
    this.setState({
      isOpen: false,
      currentPost: null
    });
  }
  
  openPost = (id) => {
    this.setState({
      isOpen: true,
      currentPost: this.props.posts[id]
    });
  }

  render() {
    return(
      <div class="posts-page">
        <FullPost isOpen={this.state.isOpen} close={this.closePost} post={this.state.currentPost} />
        <PostInput post={this.props.actions.addPost} />
        <PostsHolder open={this.openPost} posts={this.props.posts} />
      </div>
    );
  }
}





