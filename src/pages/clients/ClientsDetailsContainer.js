import React from 'react';

import ClientsApi from '../../api/v1/ClientsApi';
import PageLoading from '../../components/PageLoading';
import PageError from '../../components/PageError';

import ClientsDetailsRender from './ClientsDetailsRender';

class ClientsDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await ClientsApi.services.read(this.props.match.params.id);
      this.setState({ loading: false, data: data["0"] });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };

  handleDeleteBadge = async e => {
    this.setState({ loading: true, error: null });

    try {
      await ClientsApi.services.remove(this.props.match.params.id);
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

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <ClientsDetailsRender
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
        data={this.state.data}
      />
    );
  }
}

export default ClientsDetailsContainer;