import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import videoRegistro from './pages/cadastro/video';
import categoriaRegistro from './pages/cadastro/Categoria';


//const seguraEsse404 = () => (<div>Segure este erro 404</div>)
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={videoRegistro} />
      <Route path="/cadastro/categoria" component={categoriaRegistro} />
      <Route component={() => (<div>Segure este erro 404</div>)} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
