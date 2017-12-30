import React from 'react';
import ReactDOM from 'react-dom';
import RpsGame from './rps_game';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<RpsGame/>);
const component = wrapper.instance();
const controls  = [
    { name:'rock', id:1 , beats: ['scissors'] },
    { name:'paper', id:2 , beats:['rock'] },
    { name:'scissors', id:3 , beats: ['paper'] }
];

describe('RPS game', ()=> {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<RpsGame />, div);
    });

    it('should have 3 controls defined', ()=> {
        expect(component.controls.length).toEqual(3);
    });
    it('computerPlay should return a random valid control id', () => {
        expect(component.computerPlay()).toBeGreaterThanOrEqual(0);
        expect(component.computerPlay()).toBeLessThanOrEqual(3);
    });
    it('onPlay should play computer and get winner', () => {
        component.controls = controls;
        const computerPlaySpy = jest.spyOn(component, 'computerPlay').mockImplementation(() => 1);
        const getWinnerSpy = jest.spyOn(component, 'getWinner');
        const player1Control = controls[0];
        component.onPlay(player1Control);
        expect(computerPlaySpy).toHaveBeenCalled();
        expect(getWinnerSpy).toHaveBeenCalledWith(player1Control, controls[0]);
        computerPlaySpy.mockReset();
        computerPlaySpy.mockRestore();
    });

    it('should set game state on play', () => {
        component.onPlay(controls[0]);
        expect(component.state.winner).not.toEqual('');
        expect(component.state.player1Move).not.toEqual('');
        expect(component.state.computerMove).not.toEqual('');
    });

    it('should get th correct winner', () => {
        let playerMove = controls[0];//rock
        let computerMove = controls[1]; //paper
        expect(component.getWinner(playerMove, computerMove)).toEqual('computer');

        playerMove = controls[2];//scissors
        computerMove = controls[1]; //paper
        expect(component.getWinner(playerMove, computerMove)).toEqual('player1');

        playerMove = controls[1];//paper
        computerMove = controls[1]; //paper
        expect(component.getWinner(playerMove, computerMove)).toEqual('draw');
    });
});

