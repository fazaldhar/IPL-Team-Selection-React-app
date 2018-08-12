import React, { Component } from "react";
import PlayerList from 'components/player-list';
import { Droppable } from 'react-drag-and-drop';
import config from 'config';

class SelectedPlayers extends Component {
	constructor(props) {
		super(props);

		this._onDrop = this._onDrop.bind(this);
	}

	_onDrop(e) {
		this.props.dropPlayer(e, 'selectedPlayers');
	}

	render() {
		let { selectedPlayers } = this.props;

		return (
			<div className="col-md-4 available-players">
				<Droppable 
	                types={['yolo']} 
	                onDrop={this._onDrop}>
					<div className="available-players-count">Selected Players : {selectedPlayers.length}/{config.noOfPlayers}</div>
					<div className="available-players-list">
						<PlayerList players={selectedPlayers} from="selectedPlayers" to="availablePlayers"/>
					</div>
				</Droppable>
			</div>
		);
	}
}

export default SelectedPlayers;
