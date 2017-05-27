import React from "react";
import { Button, Nav, NavItem, NavIndexLink } from "reactstrap";

const PerfilNav = ({active, change}) => {

  const iChange = (n, e) => {
    e.preventDefault();
    change(n);
  }
  
  return(
    <Nav class="perfil-nav">
      <NavItem class={active == 1 ? "active" : ""} onClick={iChange.bind(this, 1)} >
        <a href="">
          <Button>
            <span class="fa fa-vcard-o fa-lg" /> About
          </Button>
        </a>
      </NavItem>
      <NavItem class={active == 2 ? "active" : ""} onClick={iChange.bind(this, 2)} >
        <a href="">
          <Button>
            <span class="fa fa-file-photo-o fa-lg" /> Photos
          </Button>
        </a>
      </NavItem>
      <NavItem class={active == 3 ? "active" : ""} onClick={iChange.bind(this, 3)} >
        <a href="">
          <Button>
            <span class="fa fa-users fa-lg" /> Friends
          </Button>
        </a>
      </NavItem>
      <NavItem class={active == 4 ? "active" : ""} onClick={iChange.bind(this, 4)} >
        <a href="">
          <Button>
            <span class="fa fa-newspaper-o fa-lg" /> Posts
          </Button>
        </a>
      </NavItem>
    </Nav>
  );
}

export default PerfilNav;



