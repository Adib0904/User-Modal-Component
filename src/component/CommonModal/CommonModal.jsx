
import React from "react"
import './CommonModal.css'
import styled from "@emotion/styled";

const ModalContainer = styled.div`
    background-color: #7cd6d7;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    z-index: 2;
    width:280px;
`;

const Backdrop = styled.div`
     position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CommonModal = ({ closeModal, elem }) => {

  const handleBackdropClick = (e) => {

    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer>
        <img src={`https://robohash.org/${elem.id}?size=200x200`} alt="PROFILE" />
        <h4>Name: {elem.name}</h4>
        <h4>Email: {elem.email}</h4>
        <h4>Phone: {elem.phone}</h4>
        <button className="modal-button" onClick={closeModal}>
          CLOSE
          <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
            <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd"></path>
          </svg></button>
      </ModalContainer>
    </Backdrop>
  );


}


export default CommonModal;