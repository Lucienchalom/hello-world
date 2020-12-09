import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContasCorrentes = 0;
    constructor(agencia, cliente) {
        super(agencia, cliente, 0);
        ContaCorrente.numeroDeContasCorrentes += 1;
    }
    //sobreescrevendo o que foi definido na Conta
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}