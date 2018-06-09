import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { stateNet } from './tournamentstate';


class PlayerComponent extends Component {
    constructor(props) {
        super(props);

        
    }

    render() {
        debugger;
        var {countryImg, firstName, lastName, ranking} = this.props.player;
        return (
            <div className='player-component'>
               <span>{this.props.number + 1} {countryImg} {firstName} {lastName} </span>

            </div>


        );
    }

                
}                
export default PlayerComponent;