import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';


function CategoriaRegistro() {
    const valorInicial = {
        nome: '',
        descrição: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valorInicial);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function errorHandler(infoDoEvento) {
        setValue(
            infoDoEvento.target.getAttribute('name'),
            infoDoEvento.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Registro de Categoria:{values.nome}</h1>

            <form onSubmit={function handleSubmit(infoDoEvento) {
                infoDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValues(valorInicial)

            }}>
                <div>
                    <label>
                        Nome da Categoria:
                    <input
                            type="text"
                            name="nome"
                            value={values.nome}
                            onChange={errorHandler}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Descrição
                    <textarea
                            type="text"
                            name="descrição"
                            value={values.descrição}
                            onChange={errorHandler}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Cor
                    <input
                            type="color"
                            name="cor"
                            value={values.cor}
                            onChange={errorHandler}
                        />
                    </label>
                </div>
                <button>
                    Registrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
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