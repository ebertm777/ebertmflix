import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CategoriaRegistro() {
    const valorInicial = {
        nome: '',
        descrição: '',
        cor: '',
    };
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valorInicial);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function errorHandler(infoDoEvento) {
        setValue(
            infoDoEvento.target.getAttribute('name'),
            infoDoEvento.target.value,
        );
    }

    useEffect(() => {
        if (window.location.href.includes('localhost')) {
            const URL = 'http://localhost:8080/categorias';
            fetch(URL)
                .then(async (respostaDoServer) => {
                    if (respostaDoServer.ok) {
                        const resposta = await respostaDoServer.json();
                        setCategorias(resposta);
                        return;
                    }
                    throw new Error('Não foi possível pegar os dados');
                })
        }
    }, []);

    return (
        <PageDefault>
            <h1>
                Registro de Categoria:
        {values.nome}
            </h1>

            <form onSubmit={function handleSubmit(infoDoEvento) {
                infoDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values,
                ]);
                setValues(valorInicial);
            }}
            >

                <FormField
                    label="Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={errorHandler}
                />

                <FormField
                    label="Descrição"
                    type="textarea"
                    name="descrição"
                    value={values.descrição}
                    onChange={errorHandler}
                />

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={errorHandler}
                />

                <Button>
                    Registrar
                </Button>
            </form>

            {categorias.length === 0 && (
                <div>
                    Loading...
                </div>
            )}

            <ul>
                {categorias.map((categoria) => (
                    <li key={`${categoria.nome}`}>
                        {categoria.nome}
                    </li>
                ))}
            </ul>

            <Link to="/">
                Ir para home
      </Link>
        </PageDefault>
    );
}
export default CategoriaRegistro;
