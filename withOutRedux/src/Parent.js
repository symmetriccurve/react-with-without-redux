import React, { Component } from 'react';
import './App.css';
import Child from './Child'

class Parent extends Component {
  render() {
    let children = []
    for(let i = 0; i<100;i++){
      children.push(<Child />)
    }
    return (
      <div className="App" style={{display:'flex',flexWrap:'wrap'}}>
        {children}
      </div>
    );
  }
}

export default Parent;
