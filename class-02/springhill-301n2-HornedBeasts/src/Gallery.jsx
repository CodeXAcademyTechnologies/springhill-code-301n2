import { Component } from 'react'
import HornedBeast from './HornedBeast'

export default class Gallery extends Component {

  render() {


    return (
      <>

        <HornedBeast title={'unicorn'} imageUrl={'https://images.unsplash.com/photo-1617001390418-d38e36870069?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'} description={'a horned horse'} />
        <HornedBeast title={'Rhino'} imageUrl={'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'} description={'A Rhino Family'} />
      </>
    )
  }
}
