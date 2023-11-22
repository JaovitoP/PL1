const prompt = require("prompt-sync")();

export default class Entrada {
    public receberNumero(mensagem: string): number {
        let valor = prompt(mensagem);
        let numero = new Number(valor);
        return numero.valueOf();
    }

    public receberTexto(mensagem: string): string {
        let texto = prompt(mensagem);
        return texto;
    }
}
