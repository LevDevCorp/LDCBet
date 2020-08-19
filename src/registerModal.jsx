import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import * as App from './App';

const registerHeading = () => {
  return (
        <div className="row section1">
          <div class="registermodal_card_type position-relative col-6">
            <h6>5 კაციანი</h6>
            <div class="registermodal_card_border mt-3"></div>
            <span class="registermodal_card_dot ml-auto"></span>
          </div>
          <div class="register_card_button mt-1  col-6">
            <div className="row">
              <div className="col-6 mt-2"><a class="button " href="#">5 ლარი</a></div>
              <div className="col-6">
                <div class="register_price ">
                  <h2 class="position-relative">5000</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

  )
}

const registerLoading = () => {
  return (
        <div className="register-loading mt-3 text-center">
          <p>სავარაუდო მოლოდინის დრო: 30 წამი</p>
          <div class="progress-bar position-relative">
            <span class="bar">
              <span class="progress"></span>
            </span>
          </div>
        </div>  
  )
}

const registerWait = () => {
  return (
        <div>
          <h6 className="mt-4 text-center">გთხოვთ დაელოდოთ მოწინააღდმეგეს</h6>
        </div>
  )
}
const registerJoinedPlayers = () => {
  return (
        <div class="cardbox_card_rating text-center mt-4">
          <a class="m-1 ml-4 mr-4" href="#"><img src="./images/registerlogo.svg" /></a>
          <a class="m-1 ml-4 mr-4" href="#"><img src="./images/registerlogo.svg" /></a>
          <a class="m-1 ml-4 mr-4" href="#"><img src="./images/registerlogo.svg" /></a>
          <a class="m-1 ml-4 mr-4" href="#"><img src="./images/registerlogooff.svg" /></a>
          <a class="m-1 ml-4 mr-4" href="#"><img src="./images/registerlogooff.svg" /></a>
        </div>
  )
}

const registerReadyPlayers = () => {
  return (
        <div class="cardbox_card_rating text-center mt-4">
          <a class="m-1 ml-4 mr-4" href="#"><img src="./images/registerlogo.svg" /></a>
          <a class="m-1 ml-4 mr-4" href="#"><img src="./images/registerlogo.svg" /></a>
          <a class="m-1 ml-4 mr-4" href="#"><img src="./images/registerlogo.svg" /></a>
          <a class="m-1 ml-4 mr-4" href="#"><img src="./images/registerlogo.svg" /></a>
          <a class="m-1 ml-4 mr-4" href="#"><img src="./images/registerlogo.svg" /></a>
        </div>
  )
}

const registerReadyMidsectionImage = () => {
  return (
                <div className="register-ready-gameposter position-relative">
                  <div className='register-ready-img'><img src="./images/game-poster.png" alt="gameposter"/></div>
                  <div className='register-ready-text'><p>JAMING JARS</p></div>
                </div>
  )
}


const registerReadyMidsection = () => {
  return (
          <div className="register-ready-midsection display-flex justify-content mb-2 mt-2 row">
               <div className="register-ready-gameposter position-relative col-6">
              
                <div className='register-ready-img'><h1>5X</h1></div>
                <div className='register-ready-text'><p>კოეფიციენტი</p></div>
              
              </div>
              <div className="col-6">
                {registerReadyMidsectionImage()}
              </div>

          </div>
  )
}

const gameStart = () => {
  return (
      <div className="gameStart position-relative row">
          <div className="col-6 gameStart-Sectionleft w-100">
            <h6 className='m-2'>თამაში დაიწყო</h6>
              <table className="mt-5" style={{width:'100%'}}>
                <tr>
                  <td>ხანგძლივობა</td>
                  <td>2 სათი</td>
                </tr>
                <tr>
                  <td>ქონების რაოდენობა</td>
                  <td>2 ცალი</td>
                </tr>
                <tr>
                  <td>მინიმალური ფსონი</td>
                  <td>22 ლარი</td>
                </tr>
                <tr>
                  <td>მასქიმალური ფსონი</td>
                  <td>78 ლარი </td>
                </tr>
              </table>  
              <div className='mt-5 text-center'>
                <p>თუ რამე ტექსტი იქნება აგერ ააატექსტის ადგილი</p>
              </div>
          </div>
          <div className="col-6 gameStart-Sectionright w-100 register-ready-midsection">
            <div className="mt-5">
                {registerReadyMidsectionImage()}
                <div class="register_price text-center mt-4">
                  <h2 class="position-relative">5000</h2>
                </div>
                <div class="pl-2 pr-2 mt-3 box  ">
                  <div className='d-flex justify-content-center'>
                    <p class="sidebar_spin sidebar-border d-flex ">
                      <img class="mr-2" src="./images/user.svg" alt="spins"/>1 ადგილი
                      <span class="ml-auto">2000</span>GEL
                    </p>                    
                  </div>
                  <div className='d-flex justify-content-center'>
                    <p class="sidebar_spin sidebar-border d-flex ">
                      <img class="mr-2" src="./images/user.svg" alt="spins"/>2 ადგილი
                      <span class="ml-auto">2000</span>GEL
                    </p>                    
                  </div>
                  <div className='d-flex justify-content-center'>
                    <p class="sidebar_spin sidebar-border d-flex ">
                      <img class="mr-2" src="./images/user.svg" alt="spins"/>3 ადგილი
                      <span class="ml-auto">2000</span>GEL
                    </p>                    
                  </div>
                  <div className="gameStart-button mt-3">
                    <Link className='mt-4' exact to="/leaderbet/Game">დაწყება</Link>
                  </div>
                  
                </div>
            </div>
            
          </div>
      </div>
  )
}


const Register = () => {
  const buttonStyle = {
  color:'#C5D8F9',
  backgroundColor:'transparent',
  border:'none',
  padding:'0',
  right:'0',
}
  let [foundPlayers, setFoundPlayers] = useState(false);
  const [modalAIsOpen, setModalIsOpen] = useState(false)
  if (foundPlayers === false) {
          {setTimeout(() => {setFoundPlayers(true)}, 5000)}
    return (
        <div className="registermodal">
          {registerHeading()}
          {registerWait()}
          {registerJoinedPlayers()}
          {registerLoading()}
        </div>
    )
  }
    else if(foundPlayers === true) {
    return (
        <div className="registermodal">
          {registerHeading()}
          {registerReadyMidsection()}
          <div className="register-ready-lowersection row">
            <div className="col-9 register-ready-players">{registerReadyPlayers()}</div>
            <div className="col-3">

              <button className='register_close_button mt-3 float-right' style={{padding:'14px 15px'}} onClick={() => setModalIsOpen(true)}>დაწყება</button>
            </div>
                      <Modal isOpen={modalAIsOpen}
style={{
    overlay: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.48)'
    },
    content: {
      top: '150px',
      left: '250px',
      right: '250px',
      bottom: '40px',
      width:'700px',
      height:'500px',
      border: '1px solid #35364A',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '10px',
      outline: 'none',
      padding: '0px',
      backgroundColor: '#35364A',
      transition:'2s',
    }
  }}>

        <div className='position-relative'>
         <div className='closeButton '>
          <button className='m-2' onClick={() => setModalIsOpen(false)}>
          <img  alt="user" src="./images/test.svg" /></button>
        </div>         
          {gameStart ()}
        </div>
</Modal>
          </div>
        </div>
    )
  }

}



export { Register }