import React from 'react';


import ClientsApi from '../../api/v1/ClientsApi';
import PageLoading from '../../components/PageLoading';

import ClientsCard from '../../components/ClientsCard';
import ClientsForm from '../../components/ClientsForm';

import './styles/ClientsEdit.css';

class ClientsEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      first_name: '',
      last_name: '',
      email: '',
      status: ''
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });

    try {
      const data = await ClientsApi.services.read(this.props.match.params.id);

      this.setState({ loading: false, form: data["0"] });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await ClientsApi.services.update(this.props.match.params.id, this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/clients');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <h1 className="text-center text-info">CLIENTE</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <ClientsCard
                first_name={this.state.form.first_name || 'NOMBRES'}
                last_name={this.state.form.last_name || 'APELLIDOS'}
                email={this.state.form.email || 'EMAIL'}
                status={this.state.form.status || 'ESTADO'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace396564sd2f8d2e84?d=identicon"
              />
            </div>

            <div className="col-6">
              <h1>Editar</h1>
              <ClientsForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ClientsEdit;
