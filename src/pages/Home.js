import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                src="https://static.hsbnoticias.com/sites/default/files/styles/original/public/gallery/2017/04/edgar-vivae-3.png?itok=0wYlQ6NW"
                alt="Sr Barriga Logo"
                className="img-fluid mb-2"
              />

              <h1>App Señor Barriga</h1>
              <Link className="btn btn-primary" to="/clients">
                Clientes
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src="https://media.ratingcero.com/adjuntos/154/imagenes/022/056/0022056603.jpg"
                alt="Sr Barriga"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
