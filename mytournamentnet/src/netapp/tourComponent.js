import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { stateNet } from './tournamentstate'
import PlayerComponent from './playerComponent'



class TourComponent extends Component {
    constructor(props) {
        super(props);
       

                        

       
    }



  
    
    render() {
        
        debugger;

        return (
            <div className='tour'>
              <PlayerComponent player = {props.pair.playerA} />
              <PlayerComponent player = {props.pair.playerB} />
            </div>


        );
    }


}


export default TourComponent;