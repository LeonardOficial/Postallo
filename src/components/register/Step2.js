import React from "react";
import { Link } from "react-router";
import { Col, Form, FormGroup, Button, Input, Label } from "reactstrap";

const Step2 = ({submit, jump}) => {

  const mySubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const obj  = {
      nickname: form["nickname"].value,
      about: form["about"].value
    };
    submit(obj);
  }

  return(
    <Form class="container" onSubmit={mySubmit}>
      <h2 class="tag">Profile</h2>
      <FormGroup>
        <Label for="nickname">nickname</Label>
        <Input class="coz-input" type="text" size="lg" placeholder="fulaninho"/>
      </FormGroup>
      <FormGroup>         
        <Label for="about">about you</Label>
        <Input class="coz-input" type="textarea" placeholder="I am a cool guy" />
      </FormGroup>
      <FormGroup>
        <Button class="coz-btn" type="submit" color="danger" size="lg">save</Button>
        <Link to="/"><Button class="coz-btn" type="button" onClick={jump} size="lg">jump</Button> </Link>
      </FormGroup>
    </Form>
  );
}

export default Step2;




