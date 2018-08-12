import React, { Component } from "react";
import PlayerCard from 'components/player-card';

class PlayerList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { players, from, to } = this.props;

		return (
			<div className="players-container">
				{
					players.map((player, index) => (
						<PlayerCard key={index} playerIndex={index} player={player} from={from} to={to}/>
					))
				}
			</div>
		);
	}
}

export default PlayerList;