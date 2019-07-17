import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { asyncFetchModifyCircus } from '../../actions/modifyCircus';
import './Addcircus.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './ModifyCircus.scss';

class Modifycircus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: 0,
      place: '',
      url: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { asyncFetchModifyCircus, id, oldName, oldPrice, oldPlace, oldUrl } = this.props;
    const { name, price, place, url } = this.state;
    console.log(url);
    
    asyncFetchModifyCircus(name === '' ? oldName : name, price === 0 ? oldPrice : price, place === '' ? oldPlace : place, url === '' ? oldUrl : url, id)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { display, oldName, oldPrice, oldPlace, oldUrl, index } = this.props
    const { name, price, place, url } = this.state
    return (
      <div className={display}>
        <Form onSubmit={this.handleSubmit} >
          <FormGroup>
            <Label for="name" hidden>Nom</Label>
            <Input type="text" name="name" id="name" placeholder="name" onChange={this.handleChange} value={name === '' ? oldName : name} />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label for="price" hidden>Prix</Label>
            <Input type="text" name="price" id="price" placeholder="price" onChange={this.handleChange} value={price === 0 ? oldPrice : price} />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label for="place" hidden>Lieu</Label>
            <Input type="text" name="place" id="place" placeholder="place" onChange={this.handleChange} value={place === '' ? oldPlace : place} />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label for="url" hidden>URL</Label>
            <Input type="text" name="url" id="url" placeholder="url" onChange={this.handleChange} value={url === '' ? oldUrl : url} />
          </FormGroup>
          {' '}
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

const mdtp = dispatch => bindActionCreators({
  asyncFetchModifyCircus
}, dispatch)

export default connect(null, mdtp)(Modifycircus);