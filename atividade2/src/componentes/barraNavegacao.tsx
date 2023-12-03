import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type props = {
  tema: string;
  botoes: string[];
  seletorView: Function;
};

export default class BarraNavegacao extends Component<props> {
  constructor(props: props | Readonly<props>) {
    super(props);
    this.gerarListaBotoes = this.gerarListaBotoes.bind(this);
  }

  gerarListaBotoes() {
    if (this.props.botoes.length <= 0) {
      return <></>;
    } else {
      let lista = this.props.botoes.map((valor) => (
        <li key={valor} className="nav-item">
          <a
            className="nav-link"
            href="#"
            onClick={(e) => this.props.seletorView(valor, e)}
          >
            {valor}
          </a>
        </li>
      ));
      return lista;
    }
  }

  render() {
    let tema = this.props.tema;
    return (
      <>
        <div className="logo-container">
          <img src="/assets/img/logo.png" className="pet-logo" />
        </div>
        <div className="flex-center">
          <nav
            className="navbar navbar-expand-lg"
            data-bs-theme="light"
            style={{ backgroundColor: tema, marginBottom: 10 }}
          >
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">{this.gerarListaBotoes()}</ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}
