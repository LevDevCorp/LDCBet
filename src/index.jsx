import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as heading from './header';
import * as cardbox from './cardbox';
import * as sideBar from './sidebar';
import * as table from './table';
import * as App from './App';
import './css/style.css';
import { BrowserRouter , Switch , Route } from 'react-router-dom';

const Leaderbet = () => {
	return (
		<div className='homepage'>
			{heading.header()}
			<div class="container">
				<div class="row">
					<div class="col-9">
						{cardbox.nav()}
						{cardbox.cardList()}
						{table.listHeading()}
						{table.tableList()}
					</div>
					<div class="col-3">
						{sideBar.sideBarSection1()}
						{sideBar.sideBarSection2()}
					</div>
				</div>
			</div>
		</div>
	)
};

const GamePage = () => {
	return (
		<div className=''>
			{App.App3()}
		</div>
	)
};

const Main = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path='/ldrbet/' component={Leaderbet}></Route>
        <Route exact path='/ldrbet/Game' component={GamePage}></Route>
      </Switch>
    </BrowserRouter>
    );

ReactDOM.render(
	<Main />,
	document.querySelector('#root')
);
