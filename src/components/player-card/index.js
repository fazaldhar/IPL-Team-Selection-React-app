import React, { Component } from "react";
import { Draggable } from 'react-drag-and-drop';
import INRFormat from 'utils/inr-format';

class PlayerCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { name, value, rank } = this.props.player;
		let { player, playerIndex, from, to } = this.props;
		let dragObject = {
			data: player,
			index: playerIndex,
			from: from,
			to: to
		}

		return (
			<Draggable enabled="true" type="yolo" data={JSON.stringify(dragObject)}>
				<div className="player-card clearfix">
					<div className="player-img float-left"></div>
					<div className="float-left name-and-value">
						<span>{name}</span>
						<span>Rs.{INRFormat(value)}</span>
					</div>
					<div className="float-right player-rank">
						<ul>
							{
								rank.map((item, index) => (
									<li key={index}><span className="name">{item.name} :</span><span className="value"> {item.value}</span></li>
								))
							}
						</ul>
					</div>
				</div>
			</Draggable>
		);
	}
}

export default PlayerCard;