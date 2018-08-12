import React, { Component } from "react";
import PlayerList from 'components/player-list';
import AvailablePlayers from "components/available-players";
import SelectedPlayers from "components/selected-players";
import TeamResult from "components/team-result";
import config from 'config';
import _sumBy from "lodash/sumBy";
import data from 'data.json';

class Content extends Component {
	constructor(props) {
		super(props);

		this.state = {
			availablePlayers : data.players,
			selectedPlayers : [],
			usedBudget:0,
			availableBudget:config.totalBudget,
			average: 0
		};

		this._dropPlayer = this._dropPlayer.bind(this);
	}

	_dropPlayer(e, dropLayer) {
		let dragObject = JSON.parse(e.yolo);
		
		if(dragObject.from === dropLayer)
			return;

		this.setState((prevState) => {
			// add player
			prevState[dragObject.to].push(dragObject.data);
			//remove player
			prevState[dragObject.from].splice(dragObject.index, 1);
			
			let used = _sumBy(prevState.selectedPlayers, 'value');
			let sumOfRank = 0;

			prevState.selectedPlayers.forEach((player, index) => {
				player.rank.forEach((thisRank, rankIndex) => {
					sumOfRank += 100 - thisRank.value
				})
			});

			let average = Math.round(sumOfRank/(prevState.selectedPlayers.length * 3));

			if(used <= config.totalBudget && prevState.selectedPlayers.length <= config.noOfPlayers) {
				return {
					availablePlayers: prevState.availablePlayers,
					selectedPlayers: prevState.selectedPlayers,
					usedBudget: used,
					availableBudget: config.totalBudget - used,
					average: average ? average : 0
				}
			} else {
				alert('Insufficient budget / Exceeded # of players');
			}

		})
	}

	render() {
		let { availablePlayers, selectedPlayers, totalBudget, usedBudget, availableBudget, average } = this.state;

		return (
			<div>
				<div className="row">
					<AvailablePlayers availablePlayers={availablePlayers} dropPlayer={this._dropPlayer} />
					<SelectedPlayers selectedPlayers={selectedPlayers} dropPlayer={this._dropPlayer} />
					<TeamResult totalBudget={config.totalBudget} usedBudget={usedBudget} availableBudget={availableBudget} average={average}/>
				</div>
				<div>
					Note : Drag and drop players to select/unselect them.
				</div>
			</div>
		);
	}
}

export default Content;
