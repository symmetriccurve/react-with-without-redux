import React, { Component } from 'react';
import Tile from './Tile'
import { connect } from "react-redux";
import { CLICK_ON_TILE } from './actionTypes/tileActionTypes';
import { clickOnTile } from './actions/tileActions';

class Wall extends Component {

  render() {

    let tiles = []
    for(let i = 0; i<100;i++){
      tiles.push(<Tile onChildClick={()=>this.props.onChildClick(i)} clickCount={this.props[i]} key={i}/>)
    }


    return (
      <div style={{display:'flex',flexWrap:'wrap'}}>
       {tiles}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onChildClick: (tileNumber) => dispatch(clickOnTile(tileNumber))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wall);
