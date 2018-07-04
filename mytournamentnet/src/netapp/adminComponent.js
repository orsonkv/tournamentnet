import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { stateNet } from './tournamentstate'
import { addPlayer } from './functions'
import { addPlayersToArray } from './functions'


class AdminComponent extends Component {
    constructor() {
        super();
        
        debugger
        this.inputFirstName = React.createRef();
        this.inputLastName = React.createRef();
        this.inputRanking = React.createRef();
        this.inputCountry = React.createRef();

    }
    

    onAddPlayer(){
        debugger;
        var obj = addPlayer(this.inputFirstName.current.value, this.inputLastName.current.value, this.inputRanking.current.value, this.inputCountry.current.value)
        addPlayersToArray(obj,stateNet.players);
    }
   
    render() {
        
        debugger;

        return (
            <div className='tournet'>
                
                   <input type = 'text' placeholder = 'first name' ref={this.inputFirstName}></input>
                   <input type = 'text' placeholder = 'last name' ref={this.inputLastName}></input>
                   <input type = 'number' placeholder = 'ranking' ref={this.inputRanking}></input>
                   <input type = 'text' placeholder = 'country' ref={this.inputCountry}></input>
                   <button onClick = {this.onAddPlayer.bind(this)} >add player</button>
               

            </div>


        );
    }


}
export default AdminComponent;