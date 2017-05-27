import React, { Component } from "react";

import OnlineBox from "../components/OnlineBox";
import UsersList from "../components/UsersList";

export default class ChatPage extends Component {

  render() {
    return(
      <div class="chat">
        <OnlineBox />
        <div class="recent-chat">
          <p class="tag">recent</p> <span class="num">38</span>
          <UsersList />
        </div>
      </div>
    );
  }
}






