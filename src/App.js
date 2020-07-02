import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import * as history from './historyModal';
import * as register from './registerModal';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="App container">
      <button onClick={() => setModalIsOpen(true)}>რეგისტრაცია</button>
      <Modal isOpen={modalIsOpen}

  style={{
    overlay: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.48)'
    },
    content: {
      top: '168px',
      left: '73px',
      width:'510px',
      height:'300px',
      right: '935px',
      bottom: '292px',
      border: '1px solid #198a9c',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '10px',
      outline: 'none',
      padding: '20px',
      backgroundColor:'#198a9c',
    }
  }}
      >
        {register.register()}
        <div>
          <button className='register_close_button mt-1 float-right' onClick={() => setModalIsOpen(false)}>დახურვა</button>
        </div>


      </Modal>
    </div>
  )
}

const App2 = () => {
  const buttonStyle = {
  color:'#C5D8F9',
  backgroundColor:'transparent',
  border:'none',
  padding:'0',
  right:'0',
}

  const modalClose = {
    backgroundColor:'transparent',
    border:'none',
    float:'right',
  }

  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="App">
      <button style={buttonStyle} onClick={() => setModalIsOpen(true)}>
      ისტორია</button>
      <Modal isOpen={modalIsOpen}

  style={{
    overlay: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.48)'
    },
    content: {
      top: '40px',
      left: '250px',
      right: '250px',
      bottom: '40px',
      width:'1000px',
      height:'600px',
      border: '1px solid #35364A',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '10px',
      outline: 'none',
      padding: '20px',
      backgroundColor: '#35364A',
      transition:'2s',
    }
  }}
      >

        <div>
          <button style={modalClose} onClick={() => setModalIsOpen(false)}>
          <img  alt="user" src="images/close.svg" /></button>
        </div>
        {history.historyTable()}

      </Modal>
    </div>
  )
}

export { App , App2}