import React from 'react';
import './tailwind.generated.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevoCliente from './components/clientes/NuevoCliente';
import ListadoClientes from './components/clientes/ListadoClientes';
import Layout from './components/layout/Layout';
import EditarCliente from './components/clientes/EditarCliente';

function App() {
  return (
    <Router>
      <Layout>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/clientes" component={ListadoClientes} />
          <Route exact path="/nuevo-cliente" component={NuevoCliente} />
          <Route exact path="/editar-cliente/" component={EditarCliente} />

          {/* <RutaPrivada exact path="/clientes" component={Clientes} /> */}


          <Redirect to="/" /> 

        </Switch>

      </Layout>
    </Router>
  );
}

export default App;
