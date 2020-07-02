import React from 'react';
import ReactDOM from 'react-dom';
import * as App from './App';

const nav = () => {
	return (
	<nav class="nav header_nav">
		<a class="nav-link m-1 active" href="#">All Games </a>
		<a class="nav-link m-1" href="#">Only 3 player</a>
		<a class="nav-link m-1" href="#">Only 5 player</a>
		<p class="nav-link m-1 ml-auto"><img alt="user" src="images/user.svg" />Online Players: <span>4522</span></p>
	</nav>
	)
}


const card = () => {
	return (
				<div class="col-3 p-1">
					<div class="cardbox-card w-100">
						<div class="cardbox_card_type position-relative">
							<h6>5 კაციანი</h6>
							<div class="cardbox_card_border"></div>
							<span class="cardbox_card_dot ml-auto"></span>
						</div>
						<div class="cardbox_card_heading">
							<h1 class="text-center mt-2 ">5000</h1>
						</div>
						<div class="cardbox_card_heading">
							<h6 class="text-center">მაქს. მოგება</h6>
						</div>
						<div class="cardbox_card_rating text-center ">
							<a class="m-1" href="#"><img src="images/user.svg" /></a>
							<a class="m-1" href="#"><img src="images/user.svg" /></a>
							<a class="m-1" href="#"><img src="images/user_dark.svg" /></a>
							<a class="m-1" href="#"><img src="images/user_dark.svg" /></a>
							<a class="m-1" href="#"><img src="images/user_dark.svg" /></a>
						</div>
						<div class="cardbox_card_button mt-3 text-center">
							<a class="button " href="#">5 ლარი</a>	
						</div>
						<div class="cardbox_card_register mt-4 d-flex align-items-center text-center">
							<a class="w-100 " href="#">{App.App()}</a>	
						</div>
					</div>
				</div>
	)
};


const cardList = () => {
	let rows = [];
	return (
			<div class="cardbox row">
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