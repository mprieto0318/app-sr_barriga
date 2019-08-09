import React from 'react';
import { Link } from 'react-router-dom';

import ClientsCard from '../../components/ClientsCard';
import DeleteClientsModal from '../../components/DeleteClientsModal';

import './styles/ClientsDetailsRender.css';
function ClientsDetailsRender(props) {
  const data = props.data;

  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="text-info">CLIENTE</h1>
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {data.first_name} {data.last_name}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <ClientsCard
              first_name={data.first_name}
              last_name={data.last_name}
              email={data.email}
              status={data.status}
              avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace396564sd2f8d2e84?d=identicon"
            />
          </div>
          <div className="col">
            <h2>Acciones</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/clients/${data.id}/edit`}
                >
                  Editar
                </Link>
              </div>

              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Borrar
                </button>
                <DeleteClientsModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientsDetailsRender;