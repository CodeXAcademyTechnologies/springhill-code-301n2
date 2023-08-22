import React from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./Header";
import Beasts from "./Beasts";
import Footer from "./Footer";

import { Container } from "react-bootstrap";

import imageUrls from './data.json'
class App extends React.Component {
  render() {
    return (
      <Container>
        <Header title="Beast Judge" />
        <Beasts message="Make your Beast Opinion Known" imageUrls={imageUrls} />
        <Footer text="Your opinion Counts" />
      </Container>
    )
  }
}

export default App;