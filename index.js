const nombreCliente = "Leonardo";
const dniCliente = "13804050";
const numeroCuenta = 123434343;
const saldoCuenta = 1000;

class Cliente { 
    nombreCliente;
    dniCliente;
    numeroCuenta;
    saldoCuenta;
    rutCliente;
}

const cliente1 = new Cliente();

cliente1.nombreCliente = "José";
cliente1.dniCliente = "13232";
cliente1.numeroCuenta = "232323";
cliente1.saldoCuenta = 13000;

const cliente2 = new Cliente();

cliente2.nombreCliente = "Juan";
cliente2.dniCliente = "3457521";
cliente2.numeroCuenta = "765331";
cliente2.saldoCuenta = 20000;

const cliente3 = new Cliente();

cliente3.nombreCliente = "María";
cliente3.dniCliente = "1234567";
cliente3.numeroCuenta = "986743";
cliente3.saldoCuenta = 30000;

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);
