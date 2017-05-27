import React, { Component } from "react";
import { Button, Input } from "reactstrap";

class PerfilRow extends Component {
  
  state = {
    editing: false,
    text: this.props.body
  }
  
  save() {
    this.props.save(this.props.tag, this.state.text);
  }
  
  toggle = () => {
    this.setState({editing: !this.state.editing});
    !this.state.editing ? null : this.save();
  }
  
  change = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    const full  = this.props.full ? " full-row" : "";
    const text  = this.state.text;
    const input = <Input type={this.props.full ? "textarea" : "text"} onChange={this.change} value={text} />;
    const [body, icon]  = this.state.editing ? [input, "window-close"] : [<span>{text}</span>, "pencil-square"];
    
    return(
       <div class={"table-row" + full}>
         <div class="field-edit">
           <Button onClick={this.toggle}>
             <span class={"fa fa-lg fa-" + icon} /> 
             <span class="tag">{ this.props.tag }</span>
           </Button>
         </div>
         <div class="field-body">
         { body }
         </div>
       </div>
    );
  }
}

var PerfilTable = ({user, change}) => {
  
  return(
    <div class="perfil-table">
        
      <PerfilRow tag="name"     body={user.name}     save={change} />
        
      <PerfilRow tag="nickname" body={user.nickname} save={change} />
      
      <PerfilRow tag="birthday" body={user.birthday} save={change} />
      
      <PerfilRow tag="sex"      body={user.sex}      save={change} />
      
      <PerfilRow tag="status"   body={user.status}   save={change} />
      
      <PerfilRow tag="country"  body={user.country}  save={change} />
      
      <PerfilRow tag="state"    body={user.state}    save={change} />
          
      <PerfilRow tag="about"    body={user.about}    save={change} full />
      
    </div>
  );
}

export default PerfilTable;





