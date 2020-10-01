export class Fumcionario {
    
    //MARK: - Construtores
    constructor(nome, salario, cpf) {
        this._nome = nome
        this._salario = salario
        this._cpf = cpf

        this._bonificacao = 1
        this._senha
    }

    //MARK: - Assessores
    get senha() {
        return this._senha
    }

    //MARK: - Métodos
    cadastrarSenha(senha) {
        this._senha = senha
    }
}