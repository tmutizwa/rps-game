import React from 'react';
import './winner.css';

class WinnerDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let winner;
        if(this.props.winner === 'player1'){
            winner = <h4>
                <i className='fa fa-smile-o'></i> You win! <i className='fa fa-smile-o'></i>
            </h4>
        }
        if(this.props.winner === 'computer'){
            winner = <h4>
                <i className='fa fa-frown-o'></i> You lose <i className='fa fa-frown-o'></i>
            </h4>
        }
        if(this.props.winner === 'draw'){
            winner = <h4>
                <i className='fa fa-meh-o'></i> Its a draw <i className='fa fa-meh-o'></i>
            </h4>
        }
        return (
            <div className={'winner '+this.props.winner}>
                {winner}
            </div>
        );
    }
}

export default WinnerDisplay;