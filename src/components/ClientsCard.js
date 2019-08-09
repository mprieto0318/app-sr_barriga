import React from 'react';

import './styles/ClientsCard.css';

class ClientsCard extends React.Component {
  render() {
    return (
      <div className="ClientsCard">
        

        <div className="ClientsCard-section_name">
          <img
            className="ClientsCard-avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          />
          <h1>
            {this.props.first_name} <br /> {this.props.last_name}
          </h1>
        </div>

        <div className="ClientsCard-section_info">
          <h3>{this.props.email}</h3>
          <p className={this.props.status ? "text-success" : "text-danger"}>
            {(() => {
              switch (this.props.status) {
                case 1: return "Activo";
                case 0: return "Inactivo";
                default: return "Estado desconocido";
              }
            })()}
          </p>
        </div>

        <div className="ClientsCard-footer">#{this.props.first_name}</div>
      </div>
    );
  }
}

export default ClientsCard;
