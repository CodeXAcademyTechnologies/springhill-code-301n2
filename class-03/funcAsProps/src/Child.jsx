import { Component } from 'react';
import teenDemo from './assets/teenDemo.jpg';
import { Button, Card } from 'react-bootstrap';

export default class Square extends Component {

  askParentFor10Dollars = () => {
    this.props.askForMoney(10)
  }
  askParentFor20Dollars = () => {
    this.props.askForMoney(20)
  }
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img src={teenDemo} />
        <Card.Body>
          <Card.Title>Billy</Card.Title>
          <Card.Text>
            My name is billy. I have {this.props.billysMoney} dollars.
          </Card.Text>
          <Button onClick={this.askParentFor10Dollars} variant='primary'>Ask for 10 Dollars</Button>
          <Button onClick={this.askParentFor20Dollars} variant='danger'>Ask for 20 Dollars</Button>
        </Card.Body>
      </Card>
    )
  }
}
