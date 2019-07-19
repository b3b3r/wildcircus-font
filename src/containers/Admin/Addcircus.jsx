import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { asyncFetchAddCircus } from '../../actions/addCircus';
import './Addcircus.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Addcircus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: 0,
      place: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { asyncFetchAddCircus } = this.props
    const { name, price, place } = this.state
    asyncFetchAddCircus(name, price, place)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { display } = this.props
    const { name, price, place } = this.state
    return (
      <div className={display}>
        <Form onSubmit={this.handleSubmit} >
          <FormGroup>
            <Label for="name" hidden>Nom</Label>
            <Input type="text" name="name" id="name" placeholder="name" onChange={this.handleChange} value={name} />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label for="price" hidden>Prix</Label>
            <Input type="text" name="price" id="price" placeholder="price" onChange={this.handleChange} value={price} />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label for="place" hidden>Lieu</Label>
            <Input type="text" name="place" id="place" placeholder="place" onChange={this.handleChange} value={place} />
          </FormGroup>
          {' '}
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

const mdtp = dispatch => bindActionCreators({
  asyncFetchAddCircus
}, dispatch)

export default connect(null, mdtp)(Addcircus);