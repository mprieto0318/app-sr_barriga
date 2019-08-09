import React from 'react';
import {Link} from 'react-router-dom';

import ClientsApi from '../../api/v1/ClientsApi';
import PageLoading from '../../components/PageLoading';
import PageError from '../../components/PageError';

import ClientsList from '../../components/ClientsList';

import './styles/Clients.css';





class Clients extends React.Component {

  constructor(props) {
    super(props); //Inicializar al clase padre "Component"
    console.log('1. constructor()');
      
    this.state = {
      loading: true,
      error: null,
      accessWS: false,
      data: undefined,
    }
  }

  /*
   * CODIFICADO: OK
   * FUNCIONAL: - 
   */
  render() {
    console.log('2/4. render()');

    if(this.state.loading && this.state.data === undefined) {
      return <PageLoading />;
    }

    if(this.state.error) {
      console.log("error:", this.state.error);
      return <PageError error={this.state.error}/>;
    }

    return (
      <React.Fragment>
        

        <div className="Clients">
          <div className="Clients-hero">
            <div className="Clients-container">
              <h1 className="text-info">CLIENTES</h1>
            </div>
          </div>
        </div>


        <div className="Clients-container">
          <div className="Clients-buttons">
            <Link to="/clients/new" className="btn btn-primary">
              Nuevo
            </Link>
          </div>

          

          <div className="Clients-list">
            <div className="Clients-container">

              <ClientsList data={this.state.data}/>
              
            </div>
          </div>

        </div>

        

      </React.Fragment>
    );
  }

  /*
   * CODIFICADO: OK
   * FUNCIONAL: - 
   */
  componentDidMount() {
    console.log('3. componentDidMount()');
    this.fecthData();

    if(!this.state.accessWS) { // Si en el primer llamado no falla, actualiza asincronicamente
      this.intervalId = setInterval(this.fecthData, 5000);
    }
  }

  /*
   * CODIFICADO: OK
   * FUNCIONAL: - 
   */
  fecthData = async () => {
    
    
    this.setState({loading: true, error: null});
    
    try{
      
      const data = await ClientsApi.services.list();
      
      console.log(data);
      
      // No se puede acceder al servidor, detener peticiones
      if(data.error === true) {
        this.setState({accessWS: false, loading: false, error: data.msg});
        clearInterval(this.intervalId);
      }else {
        console.log('DATA API: ', data);
        this.setState({loading: false, data: data});
      }


    }catch(e) {
      this.setState({loading: false, error: e});
    }
  }

  /*
   * Utilizar en caso de que se requiran ver los cambios en el componente anterior<->nuevo
   */
  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate()');
    //console.log({prevProps: prevProps, prevState: prevState});
    //console.log({props: this.props, state: this.state});

  }

  /*
   * Nota: Se debe de destruir el interval del webservices para evitar warning 
   * al cambiar entre componentes
   */
  componentWillUnmount() {
    console.log('6. componentWillUnmount');
    clearInterval(this.intervalId);
  }


  
}

export default Clients;
