import React, { Component } from 'react'

export class Display extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img style={{height: '40vh', border: 'solid 2px aquamarine'}} src={this.props.path}/>
      </div>
    )
  }
}

export default Display