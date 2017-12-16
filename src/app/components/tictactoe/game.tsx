import * as React from "react";
import {Board} from "./board";
import "./style.css";

export class Game extends React.Component<any, any> {
  public render() {
    return(
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/*status*/}</div>
          <ol>{/* todo */}</ol>
        </div>
      </div>
    );
  }
}
