import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import Produtos from "./listaProdutos";
import Servicos from "./listaServiços";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioBuscarTutor from "./formularioBuscarTutor";
import FormularioAtualizarPet from "./formularioAtualizarPet";
import Pagamento from "./pagamento";
import MaisConsumidos from "./listaMaisConsumidos";

type state = {
  tela: string;
};

export default class Roteador extends Component<{}, state> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      tela: "Clientes",
    };
    this.selecionarView = this.selecionarView.bind(this);
  }

  selecionarView(novaTela: string, evento: Event) {
    evento.preventDefault();
    console.log(novaTela);
    this.setState({
      tela: novaTela,
    });
  }

  render() {
    let barraNavegacao = (
      <BarraNavegacao
        seletorView={this.selecionarView}
        tema="#FF914D"
        botoes={["Clientes", "Cadastros", "Produtos", "Serviços"]}
      />
    );
    if (this.state.tela === "Clientes") {
      return (
        <>
          {barraNavegacao}
          <ListaCliente
            tema="#FF914D"
            red="#fc6464"
            seletorView={this.selecionarView}
          />
        </>
      );
    } else if (this.state.tela === "Cadastros") {
      return (
        <>
          {barraNavegacao}
          <FormularioCadastroCliente
            tema="#FF914D"
            azul="#FF914D"
            seletorView={this.selecionarView}
          />
        </>
      );
    } else if (this.state.tela === "Produtos") {
      return (
        <>
          {barraNavegacao}
          <Produtos tema="#FF914D" red="#fc6464" />
        </>
      );
    } else if (this.state.tela === "Cadastrar Pet") {
      return (
        <>
          {barraNavegacao}
          <FormularioCadastroPet tema="#FF914D" />
        </>
      );
    } else if (this.state.tela === "Buscar Tutor") {
      return (
        <>
          {barraNavegacao}
          <FormularioBuscarTutor
            tema="#FF914D"
            seletorView={this.selecionarView}
          />
        </>
      );
    } else if (this.state.tela === "Atualizar Pet") {
      return (
        <>
          {barraNavegacao}
          <FormularioAtualizarPet tema="#FF914D" red="#fc6464" />
        </>
      );
    } else if (this.state.tela === "Pagamento") {
      return (
        <>
          {barraNavegacao}
          <Pagamento tema="#FF914D" red="#fc6464" />
        </>
      );
    } else if (this.state.tela === "Mais Consumidos") {
      return (
        <>
          {barraNavegacao}
          <MaisConsumidos tema="#FF914D" red="#fc6464" />
        </>
      );
    } else {
      return (
        <>
          {barraNavegacao}
          <Servicos tema="#FF914D" red="#fc6464" />
        </>
      );
    }
  }
}
