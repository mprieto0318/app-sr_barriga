import React from 'react';
import { Link } from 'react-router-dom';

import './styles/ClientsList.css';

class ClientsListItem extends React.Component {
  render() {


    return (
      <div className="Clients-ListItem">
        {/* <img
          className="Clients-ListItem__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        /> */}

        <img
          className="Clients-ListItem__avatar"
          src="https://www.gravatar.com/avatar/21594ed15d68ace396564sd2f8d2e84?d=identicon"
          alt={`${this.props.values.first_name} ${this.props.values.last_name}`}
        />

        <div>
          <strong>
            {this.props.values.first_name} {this.props.values.last_name}
          </strong>
          <br />{this.props.values.email}
          <br />
       

          <p className={this.props.values.status ? "text-success" : "text-danger"}>
            {(() => {
              switch (this.props.values.status) {
                case 1: return "Activo";
                case 0: return "Inactivo";
                default: return "Estado desconocido";
              }
            })()}
          </p>
      
        </div>
      </div>
    );
  }
}

class ClientsList extends React.Component {
  render() {

    if(this.props.data.length === 0) {
      return (
        <div>
          <h3>No se encontro ningún registro</h3>
          <Link className="btn btn-primary" to="/clients/new">
            Crear
          </Link>
        </div>
      )
    }

    return (
      <div className="Clients-List">
        <ul className="list-unstyled">
          {this.props.data.map(values => {
            return (
              <li key={values.id}>
                <Link className="text-reset text-decoration-none" to={`/clients/${values.id}`} >
                  <ClientsListItem values={values} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ClientsList;
