export class Cliente {
    static numeroDeClientes = 0;
    constructor(nome, CPF, senha) {
        this.nome = nome;
        this._CPF = CPF;
        this._senha = senha;
        Cliente.numeroDeClientes += 1;
    }

    autenticar(senha){
        return senha === this._senha;
    }

    get CPF() {
        return this._CPF;
    }
}
