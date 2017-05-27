import axios from "axios";

export function login(user) {
  return function(dispatch) {
    return axios.post("/login", user).then(
      ({data}) => {
        
        switch(data.status) {
          case "logged": {
            dispatch({
              type: "LOGIN_SUCCESS"
            });
          }
          case "none": {
            dispatch({
              type: "LOGIN_FAIL"
            });
          }
        }
        
        return data;
      }
    );
  }
}

export function exit() {
  return function(dispatch) {
    return axios.post("/exit").then(
      (data) => {
        //alert(JSON.stringify(data));
        dispatch({
          type: "EXIT"
        });
        
        return data;
      }
    );
  }
}

export function getUser() {
  return function(dispatch) {
    return axios.get("/user/data").then(
      ({data}) => {
        //alert("SET USER ACTION");
        alert(JSON.stringify(data.user));
        dispatch({
          type: "SET_USER",
          payload: data.user
        });
      }
    );
  }
}

export function registerUser(data) {
  return function(dispatch) {
    return axios.post("/register", data).then(
      ({data}) => { 
        alert(data);
        dispatch({
          type: "CREATE_USER",
          payload: data
        });
      },
      err => { alert(err);  }
    );
  }
}

export function changeUser(what, data) {
  var url = "/user/" + what;
  alert(url);
  return function(dispatch) {
    return axios.post("/user/" + what, {
      data
    }).then(
      ({data}) => { 
        alert(JSON.stringify(data));
        dispatch({
          type: "SET_USER_" + what.toUpperCase(),
          payload: data
        });
      },
      err => { alert(err);  }
    );
  }
}







