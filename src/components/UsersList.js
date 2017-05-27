import React from "react";

const users = [
  { name: "Elesis", status: "Walking sword" },
  { name: "Lire",   status: "faster than never" },
  { name: "Arme",   status: "fire ball! fire ball!" }/*,
  { name: "Ronan",  status: "Everything for canaban" },
  { name: "Ryan",   status: "Mother nature"}*/
];


const UsersList = ({title, body}) => {
  const list = users.map((user) => {
    return(
      <li>
        <img src="" class="user-img-xs" alt="user photo" />
        <div class="data">
          <p class="title">{ title || user.name   }</p>
          <p class="body"> { body  || user.status }</p>
        </div>
      </li>
    );
  });
  
  return(
    <ul class="chat-list chat-list-inline">
      { list }
    </ul>
  );
}

const InlineUsersList = () => {
  const list = users.map((user) => {
    return(
      <li>
        <img src="" class="user-img-xs" alt="user photo" />
        { user.name }
      </li>
    );
  });
  
  return(
    <ul class="chat-list">
      { list }
    </ul>
  );
}

export { InlineUsersList };
export default UsersList;



