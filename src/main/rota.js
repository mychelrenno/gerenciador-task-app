import React from 'react'
import { Route, Switch, HashRouter, useParams } from 'react-router-dom'

import ListaTask from '../views/listaTask'
import CadastroTask from '../views/cadastroTask'

function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/lista-task" component={ListaTask} />
                <Route path="/cadastro-task" component={CadastroTask} />
                <Route path="/cadastro-task/:task" component={CadastroTask} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas