import {Conta} from "./Conta.js";

export class ContaSalario extends Conta {

    //MARK: - Construtores
    constructor(cliente) {
        super(0, cliente, 100)
    }

    //MARK: - Métodos
    sacar(valorSacado) {
        const taxa = 1.01
        return this._sacar(valorSacado, taxa)
    }
}