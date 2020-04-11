import React, { Component } from "react";
import Tile from "./Tile";
import { connect } from "react-redux";
import { increaseClickCountOnTileById } from "./actions/tileActions";

class Wall extends Component {
  render() {
    let tilesViews = [];
    const tiles = this.props.tiles;

    Object.keys(tiles).forEach((eachKey) => {
      const tileId = tiles[eachKey].tileId;
      const clickCount = tiles[eachKey].clickCount;

      tilesViews.push(
        <Tile
          onChildClick={() => this.props.onChildClick(tileId)}
          clickCount={clickCount}
          key={tileId}
        />
      );
    });

    return <div className="wall">{tilesViews}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    tiles: state.tiles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChildClick: (tileId) => dispatch(increaseClickCountOnTileById(tileId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Wall);
