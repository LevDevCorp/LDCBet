import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';


const leaderBoardHeading = () => {
	return (
		<div className="game-box text-center mt-4 pb-4">
			<div className=' mt-4'><img className='mt-5' src="../images/logo.svg" alt="logo"/></div>
			<div className='mt-4 cardbox_card_heading'>
				<h1>5000</h1>
			</div>
			<p>საპრიზო ფონდი</p>
		</div>		
	)
}

const boardPlayerActive = (place,name) => {
	return (
			<div className="game-leaderboard-board player-active mt-2">
				<div className="row">
					<div className="col-2 position-relative"><div className="game-leaderboard-place"><p>{place}</p></div></div>
					<div className="game-leaderboard-userinfo col-6">
						<p className='d-inline-block'><img className='' src="../images/game_user.svg" alt=""/>{name}</p>
						<h5>322145</h5>
					</div>
					<div className="game-leaderboard-coin text-center col-4">
						<h5>3264</h5><p>COIN</p>
					</div>
				</div>
			</div>		
	)
}
const boardPlayer = (place,name) => {
	return (
			<div className="game-leaderboard-board mt-2">
				<div className="row">
					<div className="col-2 position-relative"><div className="game-leaderboard-place"><p>{place}</p></div></div>
					<div className="game-leaderboard-userinfo col-6">
						<p className='d-inline-block'><img className='' src="../images/game_user.svg" alt=""/>{name}</p>
						<h5>322145</h5>
					</div>
					<div className="game-leaderboard-coin text-center col-4">
						<h5>3264</h5><p>COIN</p>
					</div>
				</div>
			</div>		
	)
}

const YouWon = (place,name) => {
	const [modalIsOpen, setModalIsOpen] = useState(true)
	return (
		<div>
      <Modal isOpen={modalIsOpen}

  style={{
    overlay: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#fff)'
    },
    content: {
      top: '200px',
      left: 'auto',
      right: '25%',
      bottom: '40px',
      width:'400px',
      height:'300px',
      border: '1px solid #241E36',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '10px',
      outline: 'none',
      padding: '5px',
      backgroundColor: '#241E36',
      transition:'2s',
    }
  }}>
<div className='YouWon'>
		<div className="Youwon-text text-center mt-4 justify-content-center">
			<div className='mt-2'><img src="../images/trophy.svg" alt="trophy"/></div>
			<div className='mt-2'><h6>გილოცავთ</h6></div>
			<div className='mt-2'><p>თქვენ დაიკავეთ პირველი ადგილი</p></div>
		</div>
		<div className="Youwon-price text-center">
			<div className="Youwon-price-border p-2 m-auto">
				<h1>5000<span>GEL</span></h1>
				<div className='YouWon-price-text'><p>მოგებული თანხა</p></div>
			</div>
		</div>
        <div>
        	<Link className='register_close_button mt-4 float-right' to="/leaderbet/">დახურვა</Link>
        </div>
</div>


      </Modal>			
		</div>
	)
}



const GameUI = () => {
	return ( <div className='Game'>
		{leaderBoardHeading()}
		<div className="game-leaderboard mt-4">
			<div className="text-center"><h6><img src="../images/trophy.svg" className='mr-2' alt=""/>ლიდერბორდი</h6></div>
			<div className="mt-3">
				{boardPlayer(1,'Alberto')}
				{boardPlayer(2,'Alberto')}
				{boardPlayer(3,'Alberto')}
				{boardPlayerActive(4,'davitich')}
				{boardPlayer(5,'Alberto')}
			</div>
		</div>
		{YouWon()}
	</div>
	)
}

export {GameUI} ;