import Entrada from "../io/entrada"
import Empresa from "../modelo/empresa"

import AtualizarCliente from "../negocio/atualizarCliente"
import CadastroCliente from "../negocio/cadastroCliente"
import ListagemClientes from "../negocio/listagemClientes"
import RemoverCliente from "../negocio/removerCliente"

import CadastroPet from "../negocio/cadastroPet"
import AtualizarPet from "../negocio/atualizarPet"
import RemoverPet from "../negocio/removerPet"

import CadastrarProdutos from "../negocio/cadastrarProdutos"
import AtualizarProduto from "../negocio/atualizarProduto"
import ListagemProdutos from "../negocio/listagemProdutos"
import RemoverProduto from "../negocio/removerProduto"

import CadastrarServicos from "../negocio/cadastrarServico"
import AtualizarServicos from "../negocio/atualizarServicos"
import ListagemServicos from "../negocio/listagemServicos"
import RemoverServicos from "../negocio/removerServicos"

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
  console.log(`Opções:`)
  console.log(` `)
  console.log(`---------- Clientes ----------`)
  console.log(`1 - Cadastrar Cliente`)
  console.log(`2 - Atualizar Dados do cliente`)
  console.log(`3 - Deletar Cliente`)
  console.log(`4 - Listar todos os clientes`)
  console.log(` `)
  console.log(`------------ Pets ------------`)
  console.log(`5 - Cadastrar novo Pet`)
  console.log(`6 - Atualizar Dados do pet`)
  console.log(`7 - Deletar pet`)
  console.log(` `)
  console.log(`---------- Produtos ----------`)
  console.log(`8 - Cadastrar novo Produto`)
  console.log(`9 - Listar todos os Produtos`)
  console.log(`10 - Atualizar Dados do Produto`)
  console.log(`11 - Deletar Produto`)
  console.log(` `)
  console.log(`---------- Serviços ----------`)
  console.log(`12 - Cadastrar Serviço`)
  console.log(`13 - Atualizar Dados do Serviço`)
  console.log(`14 - Listar todos os Serviços`)
  console.log(`15 - Deletar Serviço`)
  console.log(` `)
  console.log(`0 - Sair`)

  let entrada = new Entrada()
  let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

  switch (opcao) {
    case 1:
      let cadastro = new CadastroCliente(empresa.getClientes)
      cadastro.cadastrar()
      break
    case 2:
      let atualizarCliente = new AtualizarCliente(empresa.getClientes)
      atualizarCliente.atualizar()
      break
    case 3:
      let removerCliente = new RemoverCliente(empresa.getClientes)
      removerCliente.remover()
      break
    case 4:
      let listagemCliente = new ListagemClientes(empresa.getClientes)
      listagemCliente.listar()
      break
    case 5:
      let cadastroPet = new CadastroPet(empresa.getClientes)
      cadastroPet.cadastrar()
      break
    case 6:
      let atualizarPet = new AtualizarPet(empresa.getClientes)
      atualizarPet.atualizar()
      break
    case 7:
      let removerPet = new RemoverPet(empresa.getClientes)
      removerPet.remover()
      break
    case 8:
      let cadastrarProdutos = new CadastrarProdutos(empresa.getProdutos)
      cadastrarProdutos.cadastrar()
      break
    case 9:
      let listarProdutos = new ListagemProdutos(empresa.getProdutos)
      listarProdutos.listar()
      break
    case 10:
      let atualizarProdutos = new AtualizarProduto(empresa.getProdutos)
      atualizarProdutos.atualizar()
      break
    case 11:
      let removerProdutos = new RemoverProduto(empresa.getProdutos)
      removerProdutos.remover()
      break
    case 12:
      let cadastrarServico = new CadastrarServicos(empresa.getServicos)
      cadastrarServico.cadastrar()
      break
    case 13:
      let atualizarServico = new AtualizarServicos(empresa.getServicos)
      atualizarServico.atualizar()
      break
    case 14:
      let listarServico = new ListagemServicos(empresa.getServicos)
      listarServico.listar()
      break
    case 15:
      let removerServico = new RemoverServicos(empresa.getServicos)
      removerServico.remover()
      break
    case 0:
      execucao = false
      console.log(`Até mais`)
      break
    default:
      console.log(`Opção não encontrada! Tente novamente.`)
  }
}
