import React, { useState } from "react";
import Filme from "../../components/Filme";

const Home = () => {
    const [filmes, setFilmes] = useState([]);
    const [filme, setFilme] = useState({
        nome: '',
        ano: 0,
        categoria: null
    });

    const cadastrar = () => {
        setFilmes([filme, ...filmes])
    };


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
                        <label>Categoria</label>
                        <select onChange={(e) => {
                            setFilme({
                                ...filme,
                                categoria: e.target.value,
                            })
                        }}
                            className="form-control"
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
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
                <button onclick={cadastrar}
                    className="btn btn-success btn-lg btn-block"
                >
                    Cadastrar
                </button>
            </div>
            <br />
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nome </th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Ano</th>
                        <th scope="col" className="text-right"></th>
                    </tr>
                </thead>
                <tbody>
                    {filmes.map(filme => (<Filme filme={filme} />))}
                </tbody>
            </table>

        </div >

    )
}
export default Home