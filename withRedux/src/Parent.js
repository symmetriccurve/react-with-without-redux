import React, { Component } from 'react';
import './App.css';
import Child from './Child'
import { connect } from "react-redux";

class Parent extends Component {
  render() {
    let children = []
    for(let i = 0; i<100;i++){
      console.log(i,this.props[i])
      children.push(<Child onChildClick={()=>this.props.onChildClick(i)} clickCount={this.props[i]} key={i}/>)
    }
    console.log("Parent render",this.props)
    return (
      <div className="App" style={{display:'flex',flexWrap:'wrap'}}>
       {children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state',state)
  return state;
};

const mapDispachToProps = dispatch => {
  return {
    onChildClick: (childNumber) => dispatch({ type: "CLICK_ON_CHILD", value: childNumber })
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(Parent);
