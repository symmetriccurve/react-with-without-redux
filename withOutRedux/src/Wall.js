import React, { Component } from 'react';
import Tile from './Tile'

class Wall extends Component {

  render() {

    let tiles = []
    for(let i = 0; i<100;i++){
      tiles.push(<Tile key={i}/>)
    }

    return (
      <div style={{display:'flex',flexWrap:'wrap'}}>
        {tiles}
      </div>
    );
    
  }
}

export default Wall;
