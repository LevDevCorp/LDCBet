import React from 'react';
import ReactDOM from 'react-dom';
import * as App from './App';

const nav = () => {
	return (
	<nav className="nav header_nav">
		<a className="nav-link m-1 active" href="#">All Games </a>
		<a className="nav-link m-1" href="#">Only 3 player</a>
		<a className="nav-link m-1" href="#">Only 5 player</a>
		<p className="nav-link m-1 ml-auto"><img alt="user" src="images/user.svg" />Online Players: <span>4522</span></p>
	</nav>
	)
}


const card = () => {
	return (
				<div className="col-3 p-1">
					<div className="cardbox-card w-100">
						<div className="cardbox_card_type position-relative">
							<h6>5 კაციანი</h6>
							<div className="cardbox_card_border"></div>
							<span className="cardbox_card_dot ml-auto"></span>
						</div>
						<div className="cardbox_card_heading">
							<h1 className="text-center mt-2 ">5000</h1>
						</div>
						<div className="cardbox_card_heading">
							<h6 className="text-center">მაქს. მოგება</h6>
						</div>
						<div className="cardbox_card_rating text-center ">
							<a className="m-1" href="#"><img src="images/user.svg" /></a>
							<a className="m-1" href="#"><img src="images/user.svg" /></a>
							<a className="m-1" href="#"><img src="images/user_dark.svg" /></a>
							<a className="m-1" href="#"><img src="images/user_dark.svg" /></a>
							<a className="m-1" href="#"><img src="images/user_dark.svg" /></a>
						</div>
						<div className="cardbox_card_button mt-3 text-center">
							<a className="button " href="#">5 ლარი</a>	
						</div>
						<div className="cardbox_card_register mt-4 d-flex align-items-center text-center">
							<a className="w-100 " href="#">{App.App()}</a>	
						</div>
					</div>
				</div>
	)
};


const cardList = () => {
	let rows = [];
	return (
			<div className="cardbox row">
				{card()}
				{card()}
				{card()}
				{card()}
				{card()}
				{card()}
				{card()}
				{card()}
			</div>	
	)
}

export { nav , cardList };