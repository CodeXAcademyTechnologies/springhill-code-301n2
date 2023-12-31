import { Component } from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";

export default class Beasts extends Component {
  render() {
    const beastImages = this.props.imageUrls
    return (
      <div>
        <h2>{this.props.message}</h2>
        <Container>
          <Row>
            <Col>
              <BeastImage image_url={beastImages[0].image_url} />
            </Col>
            <Col>
              <BeastImage image_url={beastImages[1].image_url} />
            </Col>
            <Col>
              <BeastImage image_url={beastImages[2].image_url} />
            </Col>
          </Row>
          <Row>
            <Col>
              <BeastImage image_url={beastImages[3].image_url} />
            </Col>
            <Col>
              <BeastImage image_url={beastImages[4].image_url} />
            </Col>
            <Col>
              <BeastImage image_url={beastImages[5].image_url} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
class BeastImage extends Component {
  constructor(props) {
    super(props)
    this.state =
    {
      "status": "Yay"
    }
  }
  handleClick = () => {
    const newStatus = this.state.status === "Nay" ? "Yay" : "Nay"
    //                |        what                | True  | False
    this.setState({
      status: newStatus,
    });
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        <Image src={this.props.image_url} alt="some horned beast" rounded fluid />
        <h3>{this.state.status}</h3>
      </div>
    )
  }
}