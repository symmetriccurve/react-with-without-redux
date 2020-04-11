import React, { Component } from "react";
import colors from "./utilities/colors.json";

class Tile extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: colors[this.props.clickCount],
        }}
        className="tile"
        onClick={() => this.props.onChildClick()}
      >
        <span className="tile__content">{this.props.clickCount}</span>
      </div>
    );
  }
}

export default Tile;
