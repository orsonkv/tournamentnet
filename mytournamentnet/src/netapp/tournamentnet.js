import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { stateNet } from './tournamentstate'
import PlayerComponent from './playerComponent'


class Tournamentnet extends Component {
    constructor() {
        super();

        this.state = {
            players: stateNet.allPlayers




        }
    }

    render() {
        return (
            <div className='tournet'>
                {


                    this.state.players.map((player, i) => {
                        return <PlayerComponent player={player} number = {i}/>
                        })
                    }

            </div>


        );
    }

                
}                
export default Tournamentnet;