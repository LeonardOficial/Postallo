import React, { Component } from "react";
import { Ul } from "reactstrap";


export default class SettingsPage extends Component {

  render() {
    return(
      <div class="settings">
        <ul class="settings-list">
          <li class="full-row">change name</li>
          <li class="full-row">change password</li>
          <li class="full-row">help</li>
          <li class="full-row">support</li>
        </ul>
        <p>
          All settings will directly effect your account, not your perfil.
        </p>
      </div>
    );
  }
}




