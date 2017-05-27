import React from "react";
import { Route, IndexRoute } from "react-router";

import App          from "./components/App";
import PerfilPage   from "./containers/PerfilPage";
import SignInPage   from "./containers/SignInPage";
import RegisterPage from "./containers/RegisterPage";
import ChatPage     from "./containers/ChatPage";
import PostsPage    from "./containers/PostsPage";
import SettingsPage from "./containers/SettingsPage";

var NotFound = () => {
  return(<h1>Not Found 404!</h1>);
}

var routes = (
  <Route path="/">
    <IndexRoute component={SignInPage} />
    <Route path="register" component={RegisterPage} />
    <Route path="home" component={App}>
      <IndexRoute component={PostsPage} />
      <Route path="perfil" component={PerfilPage} />
      <Route path="chat" component={ChatPage} />
      <Route path="settings" component={SettingsPage} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;





      
      
      