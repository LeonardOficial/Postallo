import axios from "axios";
import Moment from "moment";

export function addPost(post) {
  return function(dispatch) {
    return axios.post("/post", post).then(
      (data) => {
        alert(JSON.stringify(data));
        
      },
      (error) => {
        alert(JSON.stringify(error));
      }
    );
  }
}
