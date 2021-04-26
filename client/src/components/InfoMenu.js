import React, { Component } from 'react';

class InfoMenu extends Component {
  constructor(props) {
    super(props);
    this.handleMoveClick = this.handleMoveClick.bind(this);
    this.handleAttackClick = this.handleAttackClick.bind(this);
  }

  handleMoveClick() {
    this.props.battle.handleMoveClick();
  }
  handleAttackClick() {
    this.props.battle.handleAttackClick();
  }

  render() {
    const { owns, name, health, maxHealth, moves, movesPerTurn, canAttack, canAttackThisTurn } = this.props.unit.props;
    const turn = this.props.turn;
    if (name === 'Empty') {
      return (<div><p>Empty Tile</p></div>);
    }
    return (
      <div onKeyDown={this.onKeyPressed} tabIndex={0}>
        <p>Unit: {name} ({owns ? 'Player' : 'Enemy'})</p>
        <p>Health: {health} / {maxHealth}</p>
        {(movesPerTurn > 0) ?
          <div>
            <p>Moves per turn: {movesPerTurn}</p>
            {(turn === owns) && <p>Moves: {moves}</p>}
            {turn && owns && (moves > 0) &&
              <button onClick={this.handleMoveClick} >Move</button>}
          </div> : <p>Cannot move</p>
        }
        {canAttack ?
          <div>
            {(turn === owns) ?
              ((canAttackThisTurn) ?
                <p>Can attack this turn</p> : <p>Cannot attack this turn</p>
              ) : <p>Can attack next turn</p>
            }
            {turn && owns && canAttackThisTurn &&
              <button onClick={this.handleAttackClick}>Attack</button>
            }
          </div> : <p>Cannot attack</p>
        }
      </div>
    );
  }
}

export default InfoMenu;
