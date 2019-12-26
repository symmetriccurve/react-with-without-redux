import React, { Component } from 'react';
import colors from './colors.json'

class Tile extends Component {
  state = {
      clickCount: 0
  }
  render() {
    return (
      <div 
        style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            height:'100px',
            width:'100px',
            margin:'10px',
            userSelect:'none',
            cursor:'pointer',
            backgroundColor:colors[this.state.clickCount]
        }}
        onClick={()=>this.setState({clickCount: this.state.clickCount + 1})}>
        <span style={{fontSize:'30px',color:'white',fontWeight:'bold'}}> {this.state.clickCount} </span>
      </div>
    );
  }
}

export default Tile;
