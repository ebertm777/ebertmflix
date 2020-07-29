import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function videoRegistro() {
    return (
        <PageDefault>
            <h1>Registro de Video.</h1>

            <Link to="/cadastro/categoria">
                Registrar Categoria
        </Link>
        </PageDefault>
    )
}
export default videoRegistro;