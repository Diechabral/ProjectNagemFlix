import React, { useState, useEffect } from "react";
import api from "../api"

import EditarFilme from "../components/Filme/editar";

const Catalogo = () => {
    const [filmes, setFilmes] = useState([]);
    const [filme, setFilme] = useState({});
    const [showModal, setShowModal] = useState(false);

    const carregaFilmes = () => {
        api.get('movies')
            .then((response) => setFilmes(response.data))
            .catch((err) => console.error(err))
    }

    const cadastrar = () => {
        setFilmes([filme, ...filmes])

    };

    const carregarEditarFilme = (id) => {
        setFilme(filmes.find(filme => filme.id === id));
        setShowModal(true);
    }

    const removerFilme = (id) => {
        api.delete(`movies/${id}`)
            .then((response) => carregaFilmes())
            .catch((err) => console.error(err))
    }

    const closeModal = () => {
        setShowModal(false);
    }

    useEffect(() => {
        carregaFilmes()
    }, []
    )

    return (
        <div className="container">
            <br />
            <h1>Lista Filmes</h1>
            <br />
            <div className="jumbotron">
                <div className="row">
                    <div className="col-4">
                        <label>Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            planeholder="Nome do filme"
                            onChange={(e) => {
                                setFilme({
                                    ...filme,
                                    nome: e.target.value
                                })
                            }} />
                    </div>
                    <div className="col-4">
                        <label>Ano</label>
                        <input type="text"
                            className="form-control"
                            planeholder="Ano do filme"
                            onChange={(e) => {
                                setFilme({
                                    ...filme,
                                    ano: e.target.value
                                })
                            }}
                        />
                    </div>
                    <br />
                </div>
                <br />
                <button onClick={cadastrar}
                    className="btn btn-success btn-lg btn-block"
                >
                    Cadastrar
                </button>
            </div>
            <br />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nome </th>
                        <th scope="col">Ano</th>
                        <th scope="col" className="text-right"></th>
                    </tr>
                </thead>
                <tbody>
                    {filmes.map((filme, key) => (
                        <tr key={key}>
                            <td>{filme.title}</td>
                            <td>{filme.release_date}</td>
                            <td className="text-right">
                                <button className="btn btn-info me-2" onClick={() => carregarEditarFilme(filme.id)}>Editar</button>
                                <button className="btn btn-danger" onClick={() => removerFilme(filme.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <EditarFilme showModal={showModal} handleClose={closeModal} filme={filme} atualizaLista={carregaFilmes} />
        </div >
    )
}
export default Catalogo