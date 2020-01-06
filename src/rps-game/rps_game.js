import React, { Component } from "react";

import Controls from "../controls/controls";
import Displays from "../displays/displays";
import paperImg from "./img/paper.jpg";
import rockImg from "./img/rock.png";
import scissorsImg from "./img/scissors.png";
import "./rps_game.css";

class RpsGame extends Component {
  constructor() {
    super();

    this.controls = [
      { name: "rock", id: 1, img: rockImg, beats: ["scissors"] },
      { name: "paper", id: 2, img: paperImg, beats: ["rock"] },
      { name: "scissors", id: 3, img: scissorsImg, beats: ["paper"] }
    ];

    this.state = { player1Move: "", computerMove: "", winner: "" };
  }

  onPlay(player1Move) {
    const computerMoveId = this.computerPlay();
    const computerMove = this.controls.find(
      control => control.id === computerMoveId
    );
    const winner = this.getWinner(player1Move, computerMove);
    this.setState({ player1Move, computerMove, winner });
  }

  computerPlay() {
    return Math.floor(Math.random() * 3) + 1;
  }

  getWinner(player1Move, computerMove) {
    let winner = "";
    if (player1Move.name === computerMove.name) {
      winner = "draw";
    } else if (player1Move.beats.includes(computerMove.name)) {
      winner = "player1";
    } else {
      winner = "computer";
    }
    return winner;
  }

  render() {
    return (
      <div className="rps">
        <header className="rps-header">
          <h1 className="rps-title">Rock Paper Scissors - The Game</h1>
        </header>
        <section className="container">
          <div className="row">
            <div className="col-md-12">
              <Controls
                onPlay={this.onPlay.bind(this)}
                controls={this.controls}
              />
              <Displays
                player1={this.state.player1Move}
                computer={this.state.computerMove}
                winner={this.state.winner}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default RpsGame;
