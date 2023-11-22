import Entrada from "../io/entrada";
import Produto from "../modelo/produto";

export default class RemoverProduto {
  private produtos: Array<Produto>;
  private entrada: Entrada;
  constructor(produtos: Array<Produto>) {
    this.produtos = produtos;
    this.entrada = new Entrada();
  }

  public remover(): void {
    console.log(`\nInício da deleção do produto`);
    let valor = this.entrada.receberTexto(
      `Informe o nome do produto que deseja deletar: `
    );

    const indexEncontrado = this.produtos.findIndex(
      (produto) => produto.nome === valor
    );
    const produtoEncontrado = this.produtos[indexEncontrado];

    let confirmacao = this.entrada.receberTexto(
      `Deseja deletar o produto: ${produtoEncontrado?.nome}? (S/N): `
    );

    if (confirmacao === "S" || 's') {
      this.produtos.splice(indexEncontrado, 1);
      console.log(`\nDeleção concluída! :)`);
    } else if (confirmacao === "N" || 'n') {
      console.log(`\nDeleção cancelada. :)`);
    } else {
      console.log(`Resposta inválida.`);
    }
  }
}
