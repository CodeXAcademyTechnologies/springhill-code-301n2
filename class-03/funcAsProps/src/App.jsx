import { Component } from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Parent from './Parent';
import OverdraftModal from './OverdraftModal';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverdraftWarning: false,
    }
  }
  overdraftHandler = () => this.setState({ showOverdraftWarning: true }, () => console.log('opened', this.state.showOverdraftWarning))

  closeHandler = () => {
    this.setState({ showOverdraftWarning: false }, () => console.log('closed', this.state.showOverdraftWarning))
  }

  render() {
    return (
      <Container>
        <Header title={'Billy is a teenager'} />
        <Parent onOverdraft={this.overdraftHandler} />
        <OverdraftModal show={this.state.showOverdraftWarning} onClose={this.closeHandler} />
      </Container>
    )
  }
}


class AppTwo extends Component {
  render() {
    return (
      null
    )
  }
}


export { App, AppTwo };