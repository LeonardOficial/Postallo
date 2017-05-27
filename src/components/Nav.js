import React from "react";
import { Nav, NavItem, Button, Input, InputGroup, InputGroupButton } from "reactstrap";

var MenuBox = ({onClick}) => {
  return(
    <NavItem class="menu-holder">
	     <a href="">Postallo</a>
	       
      <Button onClick={onClick}>
        <span class="fa fa-search btn-5x"></span>
      </Button>
    </NavItem>
  );
}

class SearchBox extends React.Component {

  componentDidMount() {
    this.input.focus();
  }
  
  click = () => {
    this.props.filter({
      title:  ""
    });
    this.props.onClick();
  }
  
  change = (e) => {
    this.props.filter({
      title:  e.target.value,
    });
  }
  
  render() {
    return(
      <NavItem class="search-holder">
	       <InputGroup>
	         <Input onChange={this.change} getRef={ inp => this.input = inp } placeholder="title; author; theme"/>
	         <InputGroupButton>
		          <Button color="danger" onClick={this.click}>
		            <span class="fa fa-remove" />
	           	</Button>
	         </InputGroupButton>
	       </InputGroup>
	     
	       <Button color="danger" disabled>
	         <span class="fa fa-filter" />
	       </Button>
      </NavItem>
    );
  }
}

export default class MyNav extends React.Component {
  
  state = { searching: false }
  
  toggle = () => {
    this.setState({searching: !this.state.searching });
  }
  
  render() {
    return(
      <Nav pills class="main-menu">
      { 
        this.state.searching 
        ? <SearchBox filter={this.props.filter} onClick={this.toggle} />
        : <MenuBox onClick={this.toggle} />
        
      }
      </Nav>
    );
  }
}




