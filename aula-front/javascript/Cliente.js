export class Cliente {
    static numeroDeClientes = 0;
    constructor(nome, CPF) {
        this.nome = nome;
        this._CPF = CPF;
        Cliente.numeroDeClientes += 1;
    }

    get CPF() {
        return this._CPF;
    }
}