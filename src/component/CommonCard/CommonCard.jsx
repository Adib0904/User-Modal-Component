
import React from "react"
import './CommonCard.css'
import { useState } from "react"
import CommonModal from "../CommonModal/CommonModal"

const CommonCard = ({ elem }) => {
  const [isModal, setModal] = useState(false)
  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }


  return (
    <>
      <div className="main">
        <img className="card-profile" src={`https://robohash.org/${elem.id}?size=200x200`} alt="PROFILE" />
        <h4 className="card-name">{elem.name}</h4>
        <button className="button" onClick={openModal}>
          VIEW DETAILS
          <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
            <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd"></path>
          </svg>
        </button>
      </div>

      {
        isModal && <CommonModal closeModal={closeModal} elem={elem} />
      }
    </>

  )
}


export default CommonCard