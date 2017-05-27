import React, { Component } from "react";
import { Collapse, Button } from "reactstrap";

export default class CollapseBox extends Component {

  state = {isOpen: false};
  
  toggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    var { isOpen } = this.state;
    
    return(
      <div class="collapse-box">
        <Collapse isOpen={isOpen} class="content">
          { this.props.children }
        </Collapse>
        <div class="footer">
          <Button onClick={this.toggle} color="secondary">
	           <span class={`fa fa-toggle-${isOpen ? "up" : "down"} fa-lg`}></span>
          </Button>
        </div>
      </div>
    );
  }
}


