import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function categoriaRegistro() {
    return (
        <PageDefault>
            <h1>Registro de Categoria.</h1>

            <Link to="/">
                Ir para home
        </Link>
        </PageDefault>
    )
}
export default categoriaRegistro;