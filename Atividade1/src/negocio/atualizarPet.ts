import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";

export default class AtualizarPet {
  private clientes: Array<Cliente>;
  private entrada: Entrada;
  constructor(clientes: Array<Cliente>) {
    this.clientes = clientes;
    this.entrada = new Entrada();
  }
  public atualizar(): void {
    console.log(`\nInício da atualização de dados do Pet`);

    let valor = this.entrada.receberTexto(
      `Informe o CPF do tutor do pet que deseja atualizar: `
    );

    const indexEncontrado = this.clientes.findIndex(
      (item) => item.getCpf.getValor === valor
    );
    const clienteEncontrado = this.clientes[indexEncontrado];

    clienteEncontrado.getPets.forEach((pet, index) => {
      const nomePet = pet.getNomePet;
      console.log(`Nome do Pet ${index + 1}: ${nomePet}`);
    });

    let valorPet = this.entrada.receberTexto(
      `Informe o nome do pet que deseja atualizar: `
    );
    const indexEncontradoPet = clienteEncontrado.getPets.findIndex(
      (pet) => pet.getNomePet === valorPet
    );

    let nomePet = this.entrada.receberTexto(
      `Por favor, informe o novo nome do pet: `
    );
    let raca = this.entrada.receberTexto(`Por favor, informe a nova raça do pet: `);
    let genero = this.entrada.receberTexto(`Por favor, informe o novo gênero: `);
    let pet = new Pet(nomePet, raca, genero);

    let confirmacao = this.entrada.receberTexto(
      `Atualicações: ${pet.getNomePet}, ${pet.getGenero}, ${pet.getRaca}, Deseja salvar as alterações? (S/N): `
    );

    if (confirmacao === "S" || 's') {
      this.clientes[indexEncontrado].getPets.splice(indexEncontradoPet, 1, pet);
      console.log(`\nPet atualizado! :)`);
    } else if (confirmacao === "N" || 'n') {
      console.log(`\nAtualização cancelada!. :)`);
    } else {
      console.log(`Resposta inválida.`);
    }
  }
}
