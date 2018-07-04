import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { stateNet } from './tournamentstate'
import PareComponent from './parePlayerComponent';
import PlayerComponent from './playerComponent'



class TourComponent extends Component {
    constructor(props) {
        super(props);





    }





    render() {

        debugger;

        return (
            <div className='tour'>

                 {
                    this.props.tour.map((pair, i) => {
                        return <PareComponent pair={pair} number={i} key = {i}/>
                    })
                }
               
                
              
               
            </div>


        );
    }


}


export default TourComponent;