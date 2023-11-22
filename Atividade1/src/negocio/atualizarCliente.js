"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../io/entrada");
var cliente_1 = require("../modelo/cliente");
var cpf_1 = require("../modelo/cpf");
var AtualizarCliente = /** @class */ (function () {
    function AtualizarCliente(clientes) {
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    AtualizarCliente.prototype.atualizar = function () {
        console.log("\nIn\u00EDcio da atualiza\u00E7\u00E3o de dados do Cliente");
        var valor = this.entrada.receberTexto("Informe o CPF do cliente que deseja alterar os dados: ");
        var indexEncontrado = this.clientes.findIndex(function (cliente) { return cliente.getCpf.getValor === valor; });
        var clienteEncontrado = this.clientes[indexEncontrado];
        console.log("\nCliente Encontrado: ".concat(clienteEncontrado === null || clienteEncontrado === void 0 ? void 0 : clienteEncontrado.nome));
        console.log("\nInsira os novos valores: ");
        var nome = this.entrada.receberTexto("Por favor informe o nome do cliente: ");
        var nomeSocial = this.entrada.receberTexto("Por favor informe o nome social do cliente: ");
        var data = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do cpf, no padr\u00E3o dd/mm/yyyy: ");
        var partesData = data.split('/');
        var ano = new Number(partesData[2].valueOf()).valueOf();
        var mes = new Number(partesData[1].valueOf()).valueOf();
        var dia = new Number(partesData[0].valueOf()).valueOf();
        var dataEmissao = new Date(ano, mes, dia);
        var cpf = new cpf_1.default(valor, dataEmissao);
        var cliente = new cliente_1.default(nome, nomeSocial, cpf);
        this.clientes.splice(indexEncontrado, 1, cliente);
        console.log("\nAtualiza\u00E7\u00E3o conclu\u00EDda! :)\n");
    };
    return AtualizarCliente;
}());
exports.default = AtualizarCliente;
