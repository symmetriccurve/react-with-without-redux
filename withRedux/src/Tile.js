import React, { Component } from 'react';
import colors from './colors.json'

class Tile extends Component {
  
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
            backgroundColor:colors[this.props.clickCount]
        }}
        onClick={()=>this.props.onChildClick()}>
        <span style={{fontSize:'30px',color:'white',fontWeight:'bold'}}>{this.props.clickCount} </span>
      </div>
    );
  }
}

export default Tile;
