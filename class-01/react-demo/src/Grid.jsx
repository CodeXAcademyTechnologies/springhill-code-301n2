import { Component } from "react";
import './grid.css';
import Row from './Row.jsx'


class Grid extends Component{
  render(){
    return(
      <div className='grid'>
        <Row index={10}/>
        <Row index={20}/>
        <Row index={30}/>
      </div>
    )
  }
}

export default Grid;