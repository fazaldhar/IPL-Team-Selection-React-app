import React, { Component } from "react";
import PlayerList from 'components/player-list';
import { Droppable } from 'react-drag-and-drop';


class AvailablePlayers extends Component {
	constructor(props) {
		super(props);

		this._onDrop = this._onDrop.bind(this);
	}

	_onDrop(e) {
		this.props.dropPlayer(e, 'availablePlayers');
	}

	render() {
		let { availablePlayers } = this.props;

		return (
			<div className="col-md-4 available-players">
				<Droppable 
	                types={['yolo']} 
	                onDrop={this._onDrop}>
					<div className="available-players-count">Available Players : {availablePlayers.length}</div>
					<div className="available-players-list">
						<PlayerList players={availablePlayers} from="availablePlayers" to="selectedPlayers"/>
					</div>
				</Droppable>
			</div>
		);
	}
}

export default AvailablePlayers;
