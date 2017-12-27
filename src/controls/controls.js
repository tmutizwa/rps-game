import React from 'react';
import './controls.css';

class Controls extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    play(control){
        this.props.onPlay(control);
    }

    render() {
        const propsList = this.props.controls.map((prop) => {
            return <li key={prop.id}>
                        <button onClick={this.play.bind(this, prop)}
                            className='btn btn-primary btn-block'>
                            {prop.name}
                        </button>
                    </li>
        });

        return (
            <div className='col-sm-3'>
                <ul className='controls'>
                    {propsList}
                </ul>
            </div>
        );
    }
}

export default Controls;