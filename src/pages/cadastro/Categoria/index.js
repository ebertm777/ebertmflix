import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';


function CategoriaRegistro() {
    const [categorias, setCategorias] = useState(['Teste']);
    const [nomeDaCategoria, setNomeDaCategoria] = useState('nova categoria');

    return (
        <PageDefault>
            <h1>Registro de Categoria:{nomeDaCategoria}</h1>

            <form onSubmit={function handleSubmit(infoDoEvento) {
                infoDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    nomeDaCategoria
                ]);

            }}>
                <label>
                    Nome da Categoria:
                    <input
                        type="text"
                        value={nomeDaCategoria}
                        onChange={function errorHandler(infoDoEvento) {
                            setNomeDaCategoria(infoDoEvento.target.value);
                        }}
                    />
                </label>
                <button>
                    Registrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria) => {
                    return (
                        <li key={categoria}>
                            {categoria}
                        </li>
                    )
                })}
            </ul>


            <Link to="/">
                Ir para home
        </Link>
        </PageDefault>
    )
}
export default CategoriaRegistro;