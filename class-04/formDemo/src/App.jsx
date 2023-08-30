import React from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      isLoggedIn: false
    };
  }

  updateName = (newName) => {
    this.setState({ name: newName })
  }
  updateLoggedIn = (value) => {
    this.setState({ isLoggedIn: value })
  }
  render() {
    return (
      <>
        <h1>Welcome to our site {this.state.name || "User"}</h1>
        {this.state.isLoggedIn ?
          <>
            <RegistrationForm />
            <button onClick={() => this.updateLoggedIn(false)}>Log out</button>
          </>
          :
          <LoginForm updateName={this.updateName} updateLoggedIn={this.updateLoggedIn} />
        }


      </>
    )
  }
}

export default App;