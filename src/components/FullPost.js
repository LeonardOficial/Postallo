import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Post from "./Post";
import Comments from "./CommentsHolder";

export default class FullPost extends Component {

  render() {
    return(
      <Modal static isOpen={this.props.isOpen} toggle={this.props.close} class="full-post pl-alert" >
      
        <div class="coz-modal-header">
          <Button color="secondary" onClick={this.props.close}>close <span class="fa fa-remove" /> </Button>
          <Button color="primary" onClick={this.props.close} class="stick">stick<span class="fa fa-level-up" /> </Button>
        </div>
        
        <ModalBody>
          <Post data={this.props.post} />
          <ul class="social-actions">
            <li>
              <Button>
                <span class="fa fa-thumbs-o-up fa-2x" />
                like
              </Button>
            </li>
            <li>
              <Button>
                <span class="fa fa-star fa-2x" />
                favorite
              </Button>
            </li>
            <li>
              <Button>
                <span class="fa fa-share fa-2x" />
                share
              </Button>
            </li>
          </ul>
          <Comments data={this.props.post} />
        </ModalBody>
        
      </Modal>
    );
  }
}






