import React from "react";
import { Link } from "react-router";
import { Col, Form, FormGroup, Button, Input, Label } from "reactstrap";

const Step1 = ({submit, cancel}) => {

  const mySubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const obj  = {
      name:     form["name"].value,
      pass:     form["pass"].value,
      birthday: form["birthday"].value,
      age:      form["age"].value,
      sex:      form["sex"].value,
      country:  form["country"].value,
      state:    form["state"].value
    };
    submit(obj);
  }
  
  return(
    <Form class="container"  onSubmit={mySubmit}>
      <h2 class="tag">Register</h2>
      <FormGroup>
        <Label for="name">full name</Label>
        <Input name="name" class="coz-input" type="text" size="lg" placeholder="fulano da silva"/>
      </FormGroup>
      <FormGroup>
        <Label for="pass">password</Label>
        <Input name="pass" class="coz-input" type="password" size="lg" />
        <Label for="pass2">confirm password</Label>
        <Input name="pass2" class="coz-input" type="password" size="lg" />
      </FormGroup>
      <FormGroup>
        <Label for="birthday">birthday</Label>
        <Input name="birthday" class="coz-input" type="text" size="lg" placeholder="yyyy-mm-dd"/>
      </FormGroup>
      <FormGroup row>
        <Col xs="6">
          <Label for="age">age</Label>
          <Input name="age" type="number" class="coz-input" size="lg" placeholder="18" />
        </Col>
        <Col xs="6">
          <Label for="sex">sex</Label>
          <Input name="sex" type="select" class="coz-input" size="lg">
            <option>male</option>
            <option>female</option>
          </Input>
        </Col>
        <Col xs="6">
          <Label for="country">country</Label>
          <Input name="country" class="coz-input" size="lg" placeholder="Brazil" />
        </Col>            
        <Col xs="6">
          <Label for="state">state</Label>
          <Input name="state" class="coz-input" size="lg" placeholder="Rio de Janeiro" />
        </Col>
      </FormGroup>
      <FormGroup>
        <Button class="coz-btn" type="submit" color="danger" size="lg">save</Button>
        <Link to="/"><Button class="coz-btn" type="button" onClick={cancel} size="lg">cancel :(</Button> </Link>
      </FormGroup>
    </Form>
  );
}

export default Step1;





