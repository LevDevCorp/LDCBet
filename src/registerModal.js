import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

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
          <a class="m-1 ml-4 mr-4" href="#"><img src="images/registerlogo.svg" /></a>
          <a class="m-1 ml-4 mr-4" href="#"><img src="images/registerlogo.svg" /></a>
          <a class="m-1 ml-4 mr-4" href="#"><img src="images/registerlogo.svg" /></a>
          <a class="m-1 ml-4 mr-4" href="#"><img src="images/registerlogooff.svg" /></a>
          <a class="m-1 ml-4 mr-4" href="#"><img src="images/registerlogooff.svg" /></a>
        </div>
  )
}


const register = () => {
  let foundPlayers = false;
  if (foundPlayers === false) {
    return (
        <div className="registermodal">
          {registerHeading()}
          {registerWait()}
          {registerJoinedPlayers()}
          {registerLoading()}
          {setTimeout(() => {foundPlayers=true}, 3000)}
        </div>
    )
  }
    else if(foundPlayers === true) {
    return (
        <div className="registermodal">
          {registerHeading()}
        </div>
    )
  }

}

export { register }