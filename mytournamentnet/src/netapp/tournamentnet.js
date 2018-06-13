import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { stateNet } from './tournamentstate';
import TourComponent from './tourComponent';
import PlayerComponent from './playerComponent';


import './tournament.css';

class Tournamentnet extends Component {
    constructor() {
        super();
        debugger
                   
       this.state = {
           players: stateNet.players,
            tours: []
        }

        this.rengedPlayers();
        this.makeTours()
                     
       this.state = {
           players: stateNet.players,
            tours: []
        }
    }



    compareAge(playerA, playerB) {
        return playerA.ranking - playerB.ranking;
    }
    rengedPlayers() {
        let rangedPlayers = this.state.players;
        rangedPlayers.sort(this.compareAge)
        rangedPlayers.reverse();
        this.setState({
            players: rangedPlayers
        });
    }

    makeTours(){
        debugger;
        let newTours =[];

        for (let i = 0; i < this.state.players.length; i=i+2) {
            var pairPlayers = {playerA:this.state.players[i],playerB:this.state.players[i+1]}
            newTours.push(pairPlayers);
            
        }

        this.setState({
            tours: newTours

        });

    }


    render() {
        
        debugger;

        return (
            <div className='tournet'>
                {
                    this.state.tours.map((pair, i) => {
                        return <TourComponent pair={pair} number={i} />
                    })
                }

            </div>


        );
    }


}
export default Tournamentnet;