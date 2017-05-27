import React from "react";

import { InlineUsersList } from "./UsersList";

/*
<p class="tag">online 46</p>
      <div class="see-all">
        <span class="fa fa-search" />
        see all
      </div>
*/

const OnlineBox = () => {
  return(
    <div class="online-box">
      <div class="see-all">
        <span class="fa fa-search" />
        see all
      </div>
      <InlineUsersList />
    </div>
  );
}
        
export default OnlineBox;
        
        
        
        