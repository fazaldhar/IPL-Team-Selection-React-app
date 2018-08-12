import React, { Component } from "react";
import ReactDOM from "react-dom";
import './css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from 'components/header';
import Content from "components/content";

class Index extends Component {
	render() {
		return (
			<div className="container-fluid">
				<Header />
				<Content />
			</div>
		);
	}
}

ReactDOM.render(<Index />, document.getElementById("app"));