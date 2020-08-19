import React from 'react';
import ReactDOM from 'react-dom';
import * as App from './App';


const sideBarSection1 = () => {
	return (
		<div class="sidebar w-100 ">
			<div class="sidebar_history p-2 ">
				<a class="sidebar_history_button d-flex ml-auto">
					<img class="mr-2" src="../images/history.svg" alt="history"/>
				{App.App2()}</a>
			</div>
			<div class="sidebar_logo d-flex justify-content-center mt-3">
				<div class="sidebar_logo_circle d-flex justify-content-center">
					<img src="../images/logo.svg" alt="logo"/>
				</div>
			</div>
			<h2 class="text-center mt-3">Muscul Bones</h2>
			<div class="pl-2 mt-4 pr-2 d-flex justify-content-center">
				<p class="sidebar_balance sidebar-border d-flex mb-2">
					<img class="mr-2" src="../images/balance.svg" alt="balance"/>ბალანსი
					<span class="ml-auto">995.56</span>GEL
				</p>
			</div>
			<div class="pl-2 pr-2  d-flex justify-content-center">
				<p class="sidebar_spin sidebar-border d-flex ">
					<img class="mr-2" src="../images/spin.svg" alt="spins"/>ბალანსი
					<span class="ml-auto">10</span>GEL
				</p>
			</div>

		</div>

	)
}

const sideBarSection2Block = () => {
	return (
			<div class="sidebar-historylist-block w-100 mt-2">
				<div class="row ">
					<div class="col-6">
						<div class="p-3 sidebar_historylist_price">
							<h3 class="position-relative">5000</h3>
						</div>
					</div>
					<div class="col-6">
						<p class="sidebar_historylist_date mt-2"><img class="mr-1" src="../images/history.svg"/>23.04.19<span class="ml-2">20:33</span></p>
					</div>						
				</div>
				<div class="sidebar-historylist-name pl-3 pr-3 pb-1">
					<p>
						<img class="mr-1" src="../images/user.svg"/>ნოდარა,ელდარა,ემზარა
						<a href="#"><img class="ml-3 sidebar-historylist-cross" src="../images/cross.svg"/></a>
					</p>
					<h6>1000 X 2</h6>
				</div>
			</div>
	)
}

const sideBarSection2 = () => {
	return (
		<div class="sidebar mt-3 w-100">
			<div class="sidebar_spin_heading pt-3 pr-3 pl-3 position-relative">
				<h6 class="display-inline-block">ტოპ სპინები</h6>
				<div class="sidebar_spin_border w-100"></div>
				<span class="sidebar_spin_dot ml-auto"></span>
			</div>
			<div class="sidebar-historylist p-3">
				{sideBarSection2Block()}
				{sideBarSection2Block()}
				{sideBarSection2Block()}
				{sideBarSection2Block()}
				{sideBarSection2Block()}
			</div>		
		</div>
	)
}

const modal = () => {

}


export {sideBarSection1 , sideBarSection2}