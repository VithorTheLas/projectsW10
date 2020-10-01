import {Fumcionario} from "./Funcionario.js"

export class Gerente extends Fumcionario {
    
    //MARK: - Construtores
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf)

        this._bonificacao = 1.1
    }
}