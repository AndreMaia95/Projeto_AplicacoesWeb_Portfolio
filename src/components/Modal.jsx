import React from "react";
import "../styles/Modal.css";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalTitle">
          <h1>Escola Superior de Tecnologia e Gestão</h1>
        </div>
        <div className="modalText">
          <p className="name">André Maia</p>
          <p className="course"><span className="coursetag">Course</span> - Desenvolvimento Web e Multimédia</p>
          <p className="number"><span className="numbertag">Number</span> - 27711</p>
          <p>
            Fan of F1 and Rally. Sometimes i enjoy playing videogames or watch TV Series.
            Available and interested in the entire frontend projects with positive people.
          </p>
        </div>
        <div className="closeButton">
          <button onClick={() => closeModal(false)}>
            <span className="closex">Fechar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
