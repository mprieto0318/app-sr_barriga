import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Clients from '../pages/clients/Clients';
import ClientsNew from '../pages/clients/ClientsNew';
import ClientsDetailsContainer from '../pages/clients/ClientsDetailsContainer';
import ClientsEdit from '../pages/clients/ClientsEdit';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/clients/new" component={ClientsNew} />
          <Route exact path="/clients/:id" component={ClientsDetailsContainer} />
          <Route exact path="/clients/:id/edit" component={ClientsEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;