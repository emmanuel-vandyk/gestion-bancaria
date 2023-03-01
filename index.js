// Importación de clases
import { Cliente } from './modules/cliente.js';
import { cuentaCorriente } from './modules/cuentaCorriente.js';

const cliente1 = new Cliente('Leonardo', '13804050', '123224');
const cliente2 = new Cliente('María', '234674975', '8989');

const cuentaDeMaria = new cuentaCorriente(cliente2, '2', '002');
const cuentaDeLeonardo = new cuentaCorriente(cliente1, '1', '001');

let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(150);

console.log(cuentaCorriente.cantidadCuentas);