import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { stateNet } from './tournamentstate';
import TourComponent from './tourComponent';
import PareComponent from './parePlayerComponent';
import PlayerComponent from './playerComponent';


import './tournament.css';

class Tournamentnet extends Component {
    constructor() {
        super();
        debugger

        this.rangedPlayersArr = this.rangedPlayers();
        this.pairs = this.makePairs(this.rangedPlayersArr);
        this.t = this.makeTours(this.rangedPlayersArr,  this.makePairs(this.rangedPlayersArr));
        this.state = {
            players: this.rangedPlayersArr,
            pairs: this.pairs,
            tours: this.t

        }




    }



    compareRank(playerA, playerB) {
        return playerA.ranking - playerB.ranking;
    }
    rangedPlayers() {

        let rangedPlayers = stateNet.players;
        let rankingPlayers = [];
        let emptyPlayer = {
            countryImg: null,
            firstName: null,
            lastName: null,
            ranking: 0,
            fake:true,
            id: 0
        }


        
        let i = 0;
        while (rangedPlayers.length > Math.pow(2, i)) {
            i++;
        }
        rankingPlayers = rangedPlayers;
        for (let k = 0; k < Math.pow(2, i) - rangedPlayers.length; k++) {
            rankingPlayers = [...rankingPlayers, emptyPlayer]
         
            
        }
        rangedPlayers = rankingPlayers;
        rangedPlayers.sort(this.compareRank)
        rangedPlayers.reverse();
       



        return rangedPlayers;

    }

    makePairs(arr) {

        debugger;

        let pairs = [];
        let left = 0;
        let right = arr.length;
        let n = 1;
        for (let i = 0; i < arr.length/2; i++) {
            
            var pairPlayers = {playerA: arr[left], playerB: arr[right-1], court: n+1, score: {}, set: 0, time: { hour: 0, min: 0 } };
            pairs.push(pairPlayers);
            left++;
            right--;
            n++;

        }

        return pairs;

    }
    
    makeTours(arr, pairs){
        debugger;


        let emptyPlayer = {
            countryImg: null,
            firstName: null,
            lastName: null,
            ranking: 0,
            fake:true,
            id: 0
        }

        let emptyPair = {
            playerA: emptyPlayer, playerB: emptyPlayer, court: 1, score: {}, set: 0, time: { hour: 0, min: 0 } 

        }

        let i = 0;
        while (arr.length > Math.pow(2, i)) {
            i++;
        }


        let tours = [];
        
        tours[0] =pairs;
        for (let k = 1; k <= i; k++) {
            let tour = [];
            for (let n = 0; n < tours[k-1].length/2; n++) {
               tour.push(emptyPair);
                
            }

            tours.push(tour);
            
        }
        return tours;


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