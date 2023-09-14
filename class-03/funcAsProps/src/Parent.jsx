import { Component } from 'react';
import Child from './Child';
import momDemo from './assets/mom.jpg';

import { Card, CardGroup } from 'react-bootstrap';
export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billysMoney: 0,
      MomsMoney: 100
    }
  }
  giveMoneyToBilly = (dollars) => {
    const parentBalance = this.state.MomsMoney - dollars;
    this.setState({
      billysMoney: this.state.billysMoney + dollars,
      MomsMoney: parentBalance
    });
    if (parentBalance < 0) {
      this.props.onOverdraft();
    }
  }
  render() {
    return (
      <CardGroup>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Img src={momDemo} />
            <Card.Title>Parent</Card.Title>
            <Card.Text>
              I am the parent. I have {this.state.MomsMoney} dollars.
            </Card.Text>
          </Card.Body>
        </Card>
        <Child
          askForMoney={this.giveMoneyToBilly}
          billysMoney={this.state.billysMoney}
        />
      </CardGroup>
    )
  }
}
