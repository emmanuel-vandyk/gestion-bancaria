export class cuentaCorriente {
    numeroCuenta;
    #saldoCuenta;
    agencia;

    constructor() {
        this.#saldoCuenta = 0;
        this.numeroCuenta = '';
        this.agencia = '';
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldoCuenta += valor;

        return this.#saldoCuenta;
    }

    retirarDeCuenta(valor) {
        if (valor <= this.#saldoCuenta)
            this.#saldoCuenta -= valor;

        return this.#saldoCuenta;
    }

    verSaldo() {
        return this.#saldoCuenta;
    }
}