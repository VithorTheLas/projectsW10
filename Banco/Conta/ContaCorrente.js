import {Conta} from "./Conta.js"

export class ContaCorrente extends Conta {
    
    //MARK: - Atributos
    static numeroDeContas = 0

    //MARK: - Construtores
    constructor(cliente, agencia) {
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1
    }

    //MARK: - Métodos
    sacar(valorSacado) {
        let taxa = 1.1
        return this._sacar(valorSacado, taxa)
    }
} 