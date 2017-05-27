//import axios from "axios";

var initial = [
  {
    id: 0,
    likes: 49,
    comments: [{
      userid: 1,
      body: "Awesome history!"
    }],
    head: {
      name:  "Jin Yakuza",
      title: "My Fight",
      theme: "adventure",
      date:  "2017-02-20T17:40:02-03:00"
    },
    body: `Lorem ipsum 
      dolor sit amet, consectetur adipiscing elit. 
      Curabitur ut odio feugiat, condimentum diam ut, blandit nibh. 
      Proin rhoncus tortor a lorem cursus, ut molestie eros blandit. 
      Sed pretium rhoncus congue. Suspendisse tristique magna at justo hendrerit hendrerit. 
      Nunc quis sodales tellus. In cursus faucibus feugiat. 
      Morbi mollis maximus urna, vitae tincidunt est porta sit amet.`
		},
		{
		  id: 1,
		  likes: 28,
		  comments: [],
		  head: {
		    name: "Rufus",
		    title: "My Bullet",
		    theme: "",
		    date: "2017-02-19T15:40:02-03:00"
		  },
		  body: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Curabitur ut odio feugiat.`
  }
];

export default function(state=[...initial], action) {
  switch(action.type) {
/*
    case "LOAD_POSTS": {
      var posts = axios.get("/");
      alert(posts);
      return posts;
    }
*/
    case "ADD_POST": {
      return [...state, action.payload];
    }
  }
  return state;
}




