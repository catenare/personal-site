import * as React from "react";

const Square = ({value, buttonClick = (f) => f}) =>
<button className="square" onClick={() => buttonClick(value)}>{value}</button>;

const BoardRow = ({numbers, onClick = (f) => f}) => <div className="board-row">
  {numbers.map((n) => <Square value={n} buttonClick={onClick} />)}
</div>;

export class Board extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      squares: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      xIsNext: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.calculateWinner = this.calculateWinner.bind(this);
  }

  public handleClick(i) {
    const squares = this.state.squares.slice();
    let xIsNext = this.state.xIsNext;
    squares[i] = xIsNext ? "X" : "0";
    xIsNext = !xIsNext;
    this.setState({squares, xIsNext});
    // console.log(i, squares);
  }

  public calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  public render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O"); }
    const squares = this.state.squares;
    // console.log(squares);
    return (
      <div>
        <div className="status">{status}</div>
          <BoardRow numbers={squares.slice(0, 3)} onClick={this.handleClick} />
          <BoardRow numbers={squares.slice(3, 6)} onClick={this.handleClick} />
          <BoardRow numbers={squares.slice(6, 9)} onClick={this.handleClick} />
      </div>
    );
  }
}
