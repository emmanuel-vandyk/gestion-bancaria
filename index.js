const nombreCliente = "Leonardo";
const dniCliente = "13804050";
const numeroCuenta = 123434343;
const saldoCuenta = 1000;

// Definición de clases
class Cliente { 
    nombreCliente;
    dniCliente;
    rutCliente;
}

class cuentaCorriente {
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

cuentaDeLeonardo = new cuentaCorriente();
// cuentaDeLeonardo.#saldoCuenta = 10;

let saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es: ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(100);
console.log(`El saldo actual es: ${saldo}`);

saldo = cuentaDeLeonardo.retirarDeCuenta(100)
console.log(`El saldo actual es: ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(10);
console.log(`El saldo actual es: ${saldo}`);


