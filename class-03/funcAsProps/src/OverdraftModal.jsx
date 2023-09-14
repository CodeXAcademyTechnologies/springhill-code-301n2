import { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class OverdraftModal extends Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Overdraft Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is the last time!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.props.onClose}>close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
