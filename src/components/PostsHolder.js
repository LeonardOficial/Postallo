import React, { Component } from "react";
import { Button } from "reactstrap";

import Post from "../components/Post";

const PostsHolder = ({posts, open}) => {

  return(
    <div class="post-holder">
      { 
        posts.map((post) => {
          return(
            <div>
              <Post data={post} limit={300} />
              <Button class="see-full" onClick={open.bind(null, post.id)}>full post</Button>
              <Button color="primary"><span class="fa fa-level-up fa-flip-horizontal" /> stick</Button>
            </div>
          );
        })
      }
    </div>
  );
}

export default PostsHolder;




