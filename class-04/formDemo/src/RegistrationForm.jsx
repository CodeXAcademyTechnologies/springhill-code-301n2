import { Component } from 'react'

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      isRegistered: false,
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
    console.log('value', value)
    console.log(e.target)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isRegistered: true })
  }
  render() {
    console.log(' name state', this.state.name)
    console.log(' email state', this.state.email)
    return (
      <>
        <h2>Registration form</h2>
        {this.state.isRegistered ? (
          <>
            <p>Thank you for registering for the event!</p>
            <p>Registration info</p>
            <p>Name:{this.state.name}</p>
            <p>Email:{this.state.email}</p>
          </>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id='name'
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id='email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <button type='submit'>Register</button>
          </form>
        )}
      </>
    )
  }
}
