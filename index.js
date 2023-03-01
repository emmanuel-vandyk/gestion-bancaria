const nombreCliente = "Leonardo";
const dniCliente = "13804050";
const numeroCuenta = 123434343;
const saldoCuenta = 1000;

class Cliente { 
    nombreCliente;
    dniCliente;
    rutCliente;
}

class cuentaCorriente {
    saldoCuenta;
    numeroCuenta;
    agencia;

    depositoEnCuenta(valor) {
        this.saldoCuenta += valor;
    }
}

// Cliente y Cuenta 1
const cliente1 = new Cliente();

cliente1.nombreCliente = "José";
cliente1.dniCliente = "13232";
cliente1.rutCliente = "V13804005";

const cuentaCorriente1 = new cuentaCorriente();
cuentaCorriente1.numeroCuenta = "232323";
cuentaCorriente1.saldoCuenta = 13000;
cuentaCorriente1.agencia = 1001;

//Cliente y Cuenta 2
const cliente2 = new Cliente();

cliente2.nombreCliente = "Juan";
cliente2.dniCliente = "3457521";
cliente2.rutCliente = "V11225892";


const cuentaCorriente2 = new cuentaCorriente();
cuentaCorriente2.numeroCuenta = "46676565";
cuentaCorriente2.saldoCuenta = 30000;
cuentaCorriente2.agencia = 1002;

console.log(cuentaCorriente2.saldoCuenta);
cuentaCorriente2.depositoEnCuenta(100)
console.log(cuentaCorriente2.saldoCuenta);
cuentaCorriente2.depositoEnCuenta(200);
console.log(cuentaCorriente2.saldoCuenta);
cuentaCorriente2.depositoEnCuenta(500);
console.log(cuentaCorriente2.saldoCuenta);




