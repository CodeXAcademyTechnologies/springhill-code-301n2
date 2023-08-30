import { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })

  }
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateName(this.state.username)
    this.props.updateLoggedIn(true)
  }
  render() {
    console.log('username', this.state.username)
    console.log('password', this.state.password)
    return (
      <>
        <h2>Login Form</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Username'
              value={this.state.username}
              name='username'
              onChange={this.handleUsernameChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label> Password</Form.Label>
            <Form.Control
              type='text'
              placeholder='enter password'
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>Log In</Button>
        </Form>
      </>
    )
  }
}
