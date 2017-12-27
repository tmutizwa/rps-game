import React from 'react';
import Controls from '../controls/controls';
import Displays from '../displays/displays';
import paperImg from './img/paper.jpg';
import rockImg from './img/rock.png';
import scissorsImg from './img/scissors.png';
import './rps_game.css';

class RpsGame extends React.Component {
    constructor (){
        super();

        this.controls  = [
            { name:'rock', id:1 , img: rockImg, beats: ['scissors'] },
            { name:'paper', id:2 , img: paperImg, beats:['rock'] },
            { name:'scissors', id:3 , img: scissorsImg, beats: ['paper'] }
        ];

        this.state = {player1Move: '', computerMove: '', winner:''};

    }

    onPlay(player1Move) {
        const computerMove = this.computerPlay();
        const winner = this.getWinner(player1Move, computerMove);
        this.setState({player1Move, computerMove, winner});
    }

    computerPlay() {
        const move = Math.floor(Math.random() * 3) + 1;
        return this.controls.find((control) => control.id === move);
    }

    getWinner(player1Move, computerMove) {
        let winner = '';
        if(player1Move.name === computerMove.name){
            winner = 'draw'
        } else if(player1Move.beats.includes(computerMove.name)){
            winner = 'player1';
        } else {
            winner = 'computer';
        }
        return winner;
    }

    render() {
        return (
            <div className='rps'>
                <header className='rps-header'>
                    <h1 className='rps-title'>Rock Paper Scissors!</h1>
                </header>
                <section>
                    <div className='row'>
                        <Controls onPlay={this.onPlay.bind(this)} controls={this.controls}/>
                        <Displays player1={this.state.player1Move}
                            computer={this.state.computerMove}
                            winner={this.state.winner}
                        />

                    </div>

                </section>

            </div>
        );
    }
}

export default RpsGame;