import React from "react";
const Login = () => {

    return (
        <div className="container-fluid">
            <header className="row">
            </header>
            <div id="caixa_login" className="col-4 offset-4"></div>
            <h1 className="text=white">Entrar</h1>
            <br />
            <form>
                <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email ou Número de telefone" />
                <br />
                <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Senha" />
                <br />
                <button className="btn btn-lg btn-block btn-danger">Entrar</button>
                <div className="row mt-4">
                    <div className="col text-muted">
                        <input type="checkbox" /> Lembrar de mim.
                        <a href="#" className="text-muted">
                            Precisa de ajuda?
                        </a>
                    </div>
                </div>

            </form>
        </div>

    )
}

export default Login