import React from 'react';
import WinnerDisplay from '../winner-display/winner_display';
import './displays.css';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let player1Img, computerImg, winnerDisplay;

        if (this.props.player1)
            player1Img = <img alt='player1 move' src={this.props.player1.img}/>

        if (this.props.computer)
            computerImg = <img alt='computer move' src={this.props.computer.img}/>

        if (this.props.winner)
            winnerDisplay = <WinnerDisplay winner={this.props.winner}/>

        return (
            <div className='col-sm-9 displays'>
                <div className='col-sm-6'>
                    <h4>Player 1</h4>
                    {player1Img}
                </div>
                <div className='col-sm-6'>
                    <h4>Computer</h4>
                    {computerImg}
                </div>
                <div className='col-sm-12'>
                    {winnerDisplay}
                </div>
            </div>
        );
    }
}

export default Display;