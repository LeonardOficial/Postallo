import React from "react";
import { Button } from "reactstrap";
import Moment from "moment";

const Post = ({data, limit}) => {
  const date  = Moment(data.head.date).fromNow();
  const stars = [];
  for(var i=1; i<=5; i++) {
    if(data.likes / i > 10) {
      stars.push(<span class="fa fa-star" />);
    }
    else if(i == 5 && data.head.likes/4 > 10 && (data.head.likes/5) > 5) {
      stars.push(<span class="fa fa-star-half-o" />);
    }
    else {
      stars.push(<span class="fa fa-star-o" />);
    }
  }
  return(
    <div class="post">
			   <div class="post-head">
			     <img src="" class="user-img-xs" alt="author photo" />
			     <div class="post-head-data">
			       <p class="post-date">{date} <span class="fa fa-clock-o" /> </p>
			       { data.head.theme ? <p class="post-date">{data.head.theme} <span class="fa fa-file-text" /> </p> : false }
			       <p class="post-data"><span class="fa fa-user-circle-o" /> {data.head.name} </p>
			       <p class="post-stars">{ stars }</p>
			     </div>
			   </div>
			   <div class="post-body">
			     <h4 class="post-title">{data.head.title}</h4>
			     {
			       limit && data.body.length > limit
			       ? <span>{data.body.substring(0, 300)}...</span>
			       : <span>{data.body}</span>
			     }
			   </div>
		  </div>
		);
}

export default Post;







			