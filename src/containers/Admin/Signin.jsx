import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { userRegister } from '../../actions/signin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { urlApi } from '../../constant';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  submitForm = e => {
    const { userRegister, history, location: { state } } = this.props;
    e.preventDefault()
    fetch(`${urlApi}/auth/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    }).then(res => {
      if (res.status === 401) {
        alert('erreur authentification')
      } else if (res.status === 200) {
        return res.json()
      }
    }
    ).then(user => {
      userRegister(user)
      history.push(state.from.pathname);  
    })
  }

  render() {
    const { login, password } = this.state;
    return (
      <div className="Signin">
        <h1>Bienvenue sur l'espace administrateur</h1>
        <h2>Veuillez vous identifier :</h2>
        <Form onSubmit={this.submitForm}>
          <FormGroup>
            <Label for="exampleEmail" hidden>Email</Label>
            <Input type="text" name="login" id="exampleEmail" placeholder="Login" onChange={this.handleChange} value={login} />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label for="examplePassword" hidden>Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={this.handleChange} value={password} />
          </FormGroup>
          {' '}
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

const mdtp = dispatch => bindActionCreators({
  userRegister
}, dispatch)

export default connect(null, mdtp)(Signin);