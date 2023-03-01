// Importación de clases
import { cuentaCorriente } from './modules/cuentaCorriente.js';

const cuentaDeLeonardo = new cuentaCorriente();

let saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es: ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log(`El saldo actual es: ${saldo}`);

saldo = cuentaDeLeonardo.retirarDeCuenta(100)
console.log(`El saldo actual es: ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(10);
console.log(`El saldo actual es: ${saldo}`);


