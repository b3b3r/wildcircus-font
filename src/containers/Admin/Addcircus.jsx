import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Addcircus.scss';

function Addcircus({display}) {
  console.log(display);
  
  return (
    <div className={display}>
      <Form >
        <FormGroup>
          <Label for="name" hidden>Nom</Label>
          <Input type="text" name="name" id="name" placeholder="name" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="price" hidden>Prix</Label>
          <Input type="text" name="price" id="price" placeholder="price" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="place" hidden>Lieu</Label>
          <Input type="text" name="place" id="place" placeholder="place" />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default Addcircus;