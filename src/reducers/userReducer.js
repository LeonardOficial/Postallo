
export default function(state={
  userid: 0,
  logged: false,
  name: "",
  img: "",
  age: 1,
  birthday: "0000/00/00",
  sex: "male",
  status: "single",
  country: "USA",
  state: "California",
  about: "Money after money"
}, action) {
  switch(action.type) {
    case "SET_USER": {
      return { ...action.payload };
    }
    case "CREATE_USER": {    
      return action.payload;
    }
    case "LOGIN_SUCCESS": {
      return { ...state, logged: true }
    }
    case "EXIT": {
      return { logged: false };
    }
    case "SET_USER_NAME": {
      return { ...state, name: action.payload };
    }
    case "SET_USER_NICKNAME": {
      return { ...state, nickname: action.payload };
    }
    case "SET_USER_BIRTHDAY": {
      return { ...state, birthday:  action.payload };
    }
    case "SET_USER_SEX": {
      return { ...state, sex: action.payload };
    }
    case "SET_USER_STATUS": {
      return { ...state, status: action.payload };
    }
    case "SET_USER_COUNTRY": {
      return { ...state, country: action.payload };
    }
    case "SET_USER_STATE": {
      return { ...state, state: action.payload };
    }
    case "SET_USER_ABOUT": {
      return { ...state, about:  action.payload };
    }
  }
  return state;
}





