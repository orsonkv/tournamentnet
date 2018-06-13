import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class PlayerComponent extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        debugger;
        var { countryImg, firstName, lastName, ranking } = this.props.player;
        return (
            <div class="player">
                <span class="country flag "></span>
                <span class="playerInfo" data-content_id="" title=""> {this.props.number + 1} {countryImg} {firstName} {lastName} </span>
                <span class="matchScore"></span>
            </div>


        );
    }


}
export default PlayerComponent;