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

                 {
                    this.props.tour.map((p, i) => {
                        return <PlayerComponent player={stateNet.users[p]} number={i} />
                    })
                }
               
                
              
               
            </div>


        );
    }


}


export default TourComponent;