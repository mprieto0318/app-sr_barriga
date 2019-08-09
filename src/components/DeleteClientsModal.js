import React from 'react';

import Modal from './Modal';
import './styles/DeleteClientsModal.css';

function DeleteClientsModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteClientsModal">
        <h1>Está seguro?</h1>
        <p>Se borrara el registro.</p>

        <div>
          <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">
            Borrar
          </button>
          <button onClick={props.onClose} className="btn btn-primary">
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteClientsModal;
