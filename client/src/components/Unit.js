import React, { Component } from 'react';

import hexImg from '../img/hexagon.png';

const SIZE = 40;

// Displays a unit tile. Does NOT handle any game logic.
class Unit extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props);
    this.props.battleRef.handleUnitClick(this.props.q, this.props.r);
  }

  render() {
    const q = this.props.q, r = this.props.r;
    const health = this.props.health;
    const moves = this.props.moves;
    const img = this.props.img;
    const x = SIZE * 3./2 * q;
    const y = SIZE * (Math.sqrt(3) / 2 * q + Math.sqrt(3) * r);
    const style = {
      position: 'absolute',
      left: `${x + SIZE * 12}px`,
      top: `${y + SIZE * 12}px`,
    };
    const absStyle = {
      position: 'absolute'
    }
    return (
      <div style={style}>
        <div></div>
        <div style={absStyle}>
          <img
            src={hexImg}
            width={SIZE * 2}
            height={SIZE * 2}
            onClick={this.handleClick}
          />
        </div>
        <div style={absStyle}>
          <img
            src={img}
            width={SIZE * 2}
            height={SIZE * 2}
            onClick={this.handleClick}
          />
        </div>

        {/* FIXME coordinates and scaling */}
        {this.health &&
          <div>
            <p>{health}HP</p><br />
            <p>{moves}MV</p>
          </div>
        }
      </div>
    );
  }
}

export default Unit