export class Cliente {

    //MARK: - Construtores
    constructor(nome, cpf) {
        this.nome = nome
        this._cpf = cpf
    }

    //MARK: - Assessores
    get cpf() {
        return this._cpf
    }

}