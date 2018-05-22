import React, { Component } from 'react'
import './App.css';

function Square(props){
  return (
    <div className="square"
    onClick={props.onClick}>
    {props.children}
    </div>
  )
}

const Row = props => <div className="row">{props.children}</div>
const game = Array(9).fill(1)

let i = 0

class Board extends Component {

handleClick =()=> {
  return alert("sds")
}

renderSquare = (input) => {
  return (
    input.map(x => {
      i++
      return (
      <Square key={i} onClick={this.handleClick}>
      {x}
      </Square>
    )
  })
)
}


render() {

return (
    <div>
    <div className="row">
    {this.renderSquare(game.slice(0,3))}
    </div>
    <div className="row">
  {this.renderSquare(game.slice(3,6))}
    </div>
    <div className="row">
  {this.renderSquare(game.slice(6,9))}
    </div>
    <button onClick={this.handleClick}>nvn
    </button>
    </div>
  )
}
}

export default Board;
