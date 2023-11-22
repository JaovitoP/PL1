"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../io/entrada");
var empresa_1 = require("../modelo/empresa");
// CLIENTES
var atualizarCliente_1 = require("../negocio/atualizarCliente");
var cadastroCliente_1 = require("../negocio/cadastroCliente");
var listagemClientes_1 = require("../negocio/listagemClientes");
var removerCliente_1 = require("../negocio/removerCliente");
// PETS
var cadastroPet_1 = require("../negocio/cadastroPet");
var atualizarPet_1 = require("../negocio/atualizarPet");
var removerPet_1 = require("../negocio/removerPet");
// PRODUTOS
var cadastrarProdutos_1 = require("../negocio/cadastrarProdutos");
var atualizarProduto_1 = require("../negocio/atualizarProduto");
var listagemProdutos_1 = require("../negocio/listagemProdutos");
var removerProduto_1 = require("../negocio/removerProduto");
// SERVICOS
var cadastrarServico_1 = require("../negocio/cadastrarServico");
var atualizarServicos_1 = require("../negocio/atualizarServicos");
var listagemServicos_1 = require("../negocio/listagemServicos");
var removerServicos_1 = require("../negocio/removerServicos");
/* // GERENCIADORES CONSUMO
import GerenciadorConsumo from '../negocio/gerenciadorConsumo';
import GerenciadorConsumoValor from '../negocio/gerenciadorConsumoValor';
import GerenciadorConsumoPorPet from '../negocio/gerenciadorConsumoPorPet';
 */
console.log("Bem-vindo ao melhor sistema de gerenciamento de pet shops e cl\u00EDnicas veterinarias");
var empresa = new empresa_1.default();
var execucao = true;
while (execucao) {
    console.log("Op\u00E7\u00F5es:");
    console.log(" ");
    console.log("---------- Clientes ----------");
    console.log("1 - Cadastrar Cliente");
    console.log("2 - Atualizar Dados do cliente");
    console.log("3 - Deletar Cliente");
    console.log("4 - Listar todos os clientes");
    console.log(" ");
    console.log("------------ Pets ------------");
    console.log("5 - Cadastrar novo Pet");
    console.log("6 - Atualizar Dados do pet");
    console.log("7 - Deletar pet");
    console.log(" ");
    console.log("---------- Produtos ----------");
    console.log("8 - Cadastrar novo Produto");
    console.log("9 - Listar todos os Produtos");
    console.log("10 - Atualizar Dados do Produto");
    console.log("11 - Deletar Produto");
    console.log(" ");
    console.log("---------- Servi\u00E7os ----------");
    console.log("12 - Cadastrar Servi\u00E7o");
    console.log("13 - Atualizar Dados do Servi\u00E7o");
    console.log("14 - Listar todos os Servi\u00E7os");
    console.log("15 - Deletar Servi\u00E7o");
    console.log(" ");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastro = new cadastroCliente_1.default(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            var atualizarCliente = new atualizarCliente_1.default(empresa.getClientes);
            atualizarCliente.atualizar();
            break;
        case 3:
            var removerCliente = new removerCliente_1.default(empresa.getClientes);
            removerCliente.remover();
            break;
        case 4:
            var listagemCliente = new listagemClientes_1.default(empresa.getClientes);
            listagemCliente.listar();
            break;
        case 5:
            var cadastroPet = new cadastroPet_1.default(empresa.getClientes);
            cadastroPet.cadastrar();
            break;
        case 6:
            var atualizarPet = new atualizarPet_1.default(empresa.getClientes);
            atualizarPet.atualizar();
            break;
        case 7:
            var removerPet = new removerPet_1.default(empresa.getClientes);
            removerPet.remover();
            break;
        case 8:
            var cadastrarProdutos = new cadastrarProdutos_1.default(empresa.getProdutos);
            cadastrarProdutos.cadastrar();
            break;
        case 9:
            var listarProdutos = new listagemProdutos_1.default(empresa.getProdutos);
            listarProdutos.listar();
            break;
        case 10:
            var atualizarProdutos = new atualizarProduto_1.default(empresa.getProdutos);
            atualizarProdutos.atualizar();
            break;
        case 11:
            var removerProdutos = new removerProduto_1.default(empresa.getProdutos);
            removerProdutos.remover();
            break;
        case 12:
            var cadastrarServico = new cadastrarServico_1.default(empresa.getServicos);
            cadastrarServico.cadastrar();
            break;
        case 13:
            var atualizarServico = new atualizarServicos_1.default(empresa.getServicos);
            atualizarServico.atualizar();
            break;
        case 14:
            var listarServico = new listagemServicos_1.default(empresa.getServicos);
            listarServico.listar();
            break;
        case 15:
            var removerServico = new removerServicos_1.default(empresa.getServicos);
            removerServico.remover();
            break;
        /*     case 16:
              const gerenciadorConsumo = new GerenciadorConsumo(
                gerenciadorClientes,
                gerenciadorProdutos,
                gerenciadorServicos
              )
              gerenciadorConsumo.registrarConsumo()
              break
        
            // switch case para listar os 10 clientes que mais consumiram produtos ou serviços
            case 17:
              const clientesMaisConsumiram = gerenciadorClientes.obterClientesQueMaisConsumiram()
              console.log("Clientes que mais consumiram produtos:")
              console.log(clientesMaisConsumiram.produtos)
              console.log("Clientes que mais consumiram serviços:")
              console.log(clientesMaisConsumiram.servicos)
              break
        
            // switch case para listar os serviços ou produtos mais consumidos
            case 18:
              const produtosMaisConsumidos = gerenciadorProdutos.obterProdutosMaisConsumidos()
              const servicosMaisConsumidos = gerenciadorServicos.obterServicosMaisConsumidos()
              console.log("Produtos mais consumidos:")
              console.log(produtosMaisConsumidos)
              console.log("Serviços mais consumidos:")
              console.log(servicosMaisConsumidos)
              break
        
            // switch case para listar os serviços ou produtos mais consumidos por tipo e raça de pets
            case 19:
              const gerenciadorConsumoPorPet = new GerenciadorConsumoPorPet(
                gerenciadorClientes,
                gerenciadorProdutos,
                gerenciadorServicos
              )
              gerenciadorConsumoPorPet.listarConsumoPorPet()
              break
        
            // switch case para listar os 5 clientes que mais consumiram em valor
            case 20:
              const gerenciadorConsumoValor = new GerenciadorConsumoValor(
                gerenciadorClientes,
                gerenciadorProdutos,
                gerenciadorServicos
              )
              gerenciadorConsumoValor.listarClientesQueMaisConsumiramValor()
              break */
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Op\u00E7\u00E3o n\u00E3o encontrada! Tente novamente.");
    }
}
