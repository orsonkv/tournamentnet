import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlayerComponent from './playerComponent';


class PareComponent extends Component {

    constructor(props) {
        super(props);
        this.inputScorePlayerA = React.createRef();
        this.inputScorePlayerB = React.createRef();

    }
    getVinner(){
        var a = this.inputScorePlayerA.current.value +  this.inputScorePlayerB.current.value;
        console.log(a);

    }
    render() {
        debugger;

        return (
            <div class="pair">
                <div class="palyer-in-pair">
                    <PlayerComponent player={this.props.pair.playerA} />
                    <input type='number' placeholder='0' min='0' max='30' className='match-score' ref={this.inputScorePlayerA}  />
                </div>
                <div class="palyer-in-pair">
                    <PlayerComponent player={this.props.pair.playerB} />
                    <input type='number' placeholder='0' min='0' max='30' className='match-score' ref={this.inputScorePlayerB}  />
                </div>
                <div>
                <button onClick = {this.getVinner.bind(this)}>v</button>
                </div>
                
            </div>


        );
    }


}
export default PareComponent;