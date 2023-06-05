import { Link } from "react-router-dom"
import React, {useState} from 'react'
import SportsModal from './sportsmodal'

const Sports = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="text-white">
      <p>THis is the Sports page</p>
      <button className="btn openModalBtn" onClick={() => {setOpenModal(true)}}>Open Modal</button>
      { openModal && <SportsModal closeModal={() => setOpenModal(false)} />}
    </div>
  )
}

export default Sports
