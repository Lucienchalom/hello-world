import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    constructor(cliente) {
        super(1000, cliente, 0);
    }
    sacar(valor) {
        let taxa = 1.01;
        return this._sacar(valor, taxa);
    }

}