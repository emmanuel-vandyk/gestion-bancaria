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
    }

    retirarDeCuenta(valor) {
        if (valor <= this.#saldoCuenta)
        this.#saldoCuenta -= valor;
    }
}

cuentaDeLeonardo = new cuentaCorriente();
// cuentaDeLeonardo.#saldoCuenta = 10;

cuentaDeLeonardo.depositoEnCuenta(100);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.retirarDeCuenta(100)
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(-10);
console.log(cuentaDeLeonardo);

