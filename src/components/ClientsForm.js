import React from 'react';

class ClientsForm extends React.Component {
  handleClick = e => {
    console.log('Button was clicked');
  };

  render() {
    return (
      <div>
        <h3>Información del Cliente</h3>

        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Nombres</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="first_name"
              value={this.props.formValues.first_name}
            />
          </div>

          <div className="form-group">
            <label>Apellidos</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="last_name"
              value={this.props.formValues.last_name}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Estado</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="status"
              value={this.props.formValues.status}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Guardar
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message || this.props.error}</p>
          )}
        </form>
      </div>
    );
  }
}

export default ClientsForm;