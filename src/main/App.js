import React from 'react';

import Rotas from './rota'
import NavBar from '../components/navBar'
import 'toastr/build/toastr.min.js'
import ListaTask from '../views/listaTask'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.css'

class App extends React.Component {

  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <Rotas />
          {/* <ListaTask /> */}
        </div>
      </>
    );
  }
}

export default App;
