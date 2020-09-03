import React from 'react'

import NavbarItem from './navBarItem'

function Navbar() {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                {/* <a href="https://bootswatch.com/" className="navbar-brand">Minhas Finanças</a> */}
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        {/* <NavbarItem href="#/home" label="Home" />
                        <NavbarItem href="#/cadastro-usuario" label="Cadastro de usuário" />
                        <NavbarItem href="#/" label="Lançamentos" />
                        <NavbarItem href="#/login" label="Login" /> */}
                        <NavbarItem href="#/lista-task" label="Lista de task" />
                        <NavbarItem href="#/cadastro-task" label="Cadastro de task" />
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Navbar