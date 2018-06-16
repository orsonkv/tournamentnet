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

        this.rangedPlayersArr = this.rangedPlayers();
        this.pairs = this.makePairs();
        this.state = {
            players: this.rangedPlayersArr,
            pairs: this.pairs,
            tours: stateNet.tours

        }




    }



    compareAge(playerA, playerB) {
        return playerA.ranking - playerB.ranking;
    }
    rangedPlayers() {
        
        let rangedPlayers = stateNet.players;
       
        

        
        rangedPlayers.sort(this.compareAge)
        rangedPlayers.reverse();

        return rangedPlayers;

    }

    makePairs() {
      


        let pairs = [];
        for (let i = 0; i < this.rangedPlayersArr.length; i = i + 2) {
            var pairPlayers = { playerA: this.rangedPlayersArr[i], playerB: this.rangedPlayersArr[i + 1] }
            pairs.push(pairPlayers);

        }

        return pairs;

    }


    render() {


        debugger;

        return (
            <div className='tournet'>
                {
                    this.state.tours.map((tour, i) => {
                        return <TourComponent tour={tour} number={i} />
                    })
                }


            </div>


        );
    }


}
export default Tournamentnet;