import React, { Component } from "react";
import config from 'config';
import INRFormat from 'utils/inr-format';

class TeamResult extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { usedBudget, availableBudget, average } = this.props;

		return (
			<div className="col-md-4">
				<div className="result-board">
					<table>
						<tbody>
							<tr>
								<td className="label">Total Budget :</td>
								<td className="value">Rs. {INRFormat(config.totalBudget)}</td>
							</tr>
							<tr>
								<td className="label">Used :</td>
								<td className="value">Rs. {INRFormat(usedBudget)}</td>
							</tr>
							<tr>
								<td className="label">Available :</td>
								<td className="value">Rs. {INRFormat(availableBudget)}</td>
							</tr>
						</tbody>
					</table>
					<div className="result">Team Strength : {average}%</div>
				</div>
			</div>
		)
	}
}

export default TeamResult;