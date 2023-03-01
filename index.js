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
    constructor() {
        this.saldoCuenta = 0;
        this.numeroCuenta = '';
        this.agencia = '';
    }

    depositoEnCuenta(valor) {
        this.saldoCuenta += valor;
    }

    retirarDeCuenta(valor) {
        this.saldoCuenta -= valor;
    }
}

cuentaDeLeonardo = new cuentaCorriente();

cuentaDeLeonardo.depositoEnCuenta(100);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.retirarDeCuenta(50)
console.log(cuentaDeLeonardo);

