import React from "react";

const Filme = ({ filme }) => {

    const mostraNome = () => {
        alert(filme.nome);
    };
    return (
        <tr>
            <td>{filme.title}</td>
            <td>{filme.vote_count}</td>
            <td>{filme.release_date}</td>
            <td className="text-right">
                <button className="btn btn-info " onClick={mostraNome}>Informações</button>{' '}
                <button className="btn btn-danger">Excluir</button>
            </td>
        </tr>
    )
}
export default Filme