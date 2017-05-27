import React from "react";
import { Button, Input, Badge } from "reactstrap";


export default class PostInput extends React.Component {

  state = { 
    invalidFields: [],
    actived: "sm",
    title: "",
    theme: "",
    tbody: ""
  }
  
  validate = () => {
    var fields = [];
    
    var ok = () => {
      this.setState({invalidFields: []});
      return true;
    }
    
    var wrong = () => {
      this.setState({invalidFields: fields});
      return false;
    }
    
    //switch(this.state.actived) {
      //case "md":
        //if(this.state.title == "") fields.push("title must not be empty");
        //if(this.state.theme == "") fields.push("theme must not be empty");
        if(this.state.tbody == "") fields.push("body must not be empty");
        //break;
      //case "sm":
        //if(this.state.tbody == "") fields.push("body must not be empty");
      //break;
    //}
    return !fields.length ? ok() : wrong();
  }
  
  post = () => {
    var isValid = this.validate();
    if(!isValid) return false;
    
    this.props.post({
      head: {
        title: this.state.actived == "md" && this.state.title,
        theme: this.state.actived == "md" && this.state.theme
      },
      body: this.state.tbody
    });
    
    this.setState({
      title: "",
      theme: "",
      tbody: ""
    });
  }
  
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  active = (s) => {
    this.setState({actived: s});
  }

  render() {
  
    var sm = (
      <div class="sm-input">
        <Input class="coz-input" name="tbody" onChange={this.change} value={this.state.tbody} type="textarea" placeholder=" Lorem ipsum" />
      </div>
    );
    
    var md = (
      <div class="md-input">
        <Input name="title" onChange={this.change} value={this.state.title} class="title-input coz-input" type="text"     placeholder="My Title" />
        <Input name="theme" onChange={this.change} value={this.state.theme} class="theme-input coz-input" type="text"     placeholder="theme" />
        <Input name="tbody" onChange={this.change} value={this.state.tbody} class="texta-input coz-input" type="textarea" placeholder=" Lorem ipsum" />
      </div>
    );
  
    return(
      <div class="post-input">
        <div class="post-input-type">
          <Button size="sm" class="coz-btn" active={this.state.actived == "sm"} onClick={ this.active.bind(this, "sm") }>short </Button>
          <Button size="sm" class="coz-btn" active={this.state.actived == "md"} onClick={ this.active.bind(this, "md") }>middle</Button>
          <Button color="danger" size="sm" class="advanced" disabled>ADVANCED</Button>
        </div>
        <div class="invalid-fields">
          {
            this.state.invalidFields.map((warning) => {
              return <Badge color="danger">{warning}</Badge>
            })
          }
        </div>
        { 
          this.state.actived == "sm" 
          ? <div>{sm}</div>
          : <div>{md}</div>
        }
        
        <div class="post-input-footer">
          <Button color="danger" onClick={this.post}>
	           post
	         </Button>
	         <Button color="secondary">
	           <span class="fa fa-picture-o fa-lg pic-btn" />
	         </Button>
	         <Button color="secondary">
	           <span class="fa fa-camera cam-btn fa-lg" />
	         </Button>
        </div>
      </div>
    );
  }
}

    
      
      
      