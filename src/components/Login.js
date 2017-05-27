import React from "react";

var LoginLayout = ({children}) => {
  return(
    <div class="login-holder">
      <div class="logo">
        <span>mobile</span>
        <img src="logo.png"/> Postallo
      </div>
      { children }
    </div>
  );
}

export default LoginLayout;





