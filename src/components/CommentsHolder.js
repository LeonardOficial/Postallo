import React from "react";

import { Button, Input, InputGroup, InputGroupButton, Media } from "reactstrap";

const Comments = ({data}) => {
  const comments = [];
  for(var i=0; i<data.comments.length; i++) {
    const comment = data.comments[i];
    comments.push(<p>{comment.userid}: {comment.body}</p>);
  }
  return(
    <div class="comments-holder">
      <InputGroup class="comment-input">
        <Input type="textarea" rows="3" placeholder="comment" />
        <InputGroupButton>
          <Button color="primary">
            <span class="fa fa-chevron-circle-down" />
          </Button>
        </InputGroupButton>
      </InputGroup>
      <Media>
        <Media left href="">
          <Media class="user-img-xs" object data-src="" alt="user photo" />
        </Media>
        <Media body>
          <Media heading>
            <span class="fa fa-user-circle-o" />
            My title
          </Media>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut odio feugiat, condimentum diam ut, blandit nibh. Proin rhoncus tortor a lorem cursus, ut molestie eros blandit. Sed pretium rhoncus congue. Suspendisse tristique magna at justo hendrerit hendrerit. Nunc quis sodales tellus. In cursus faucibus
        </Media>
      </Media>
      
      <Media>
        <Media left href="">
          <Media class="user-img-xs" object data-src="" alt="user photo" />
        </Media>
        <Media body>
          <Media heading>
            <span class="fa fa-user-circle-o" />
            My title
          </Media>
          this is my body
        </Media>
      </Media>
      
    </div>
  );
}

export default Comments;




