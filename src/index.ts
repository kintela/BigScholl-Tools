import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import {
  dividir,
  logaritmoNatural,
  multiplicar,
  obtenerLineasMenu,
  potencia,
  restar,
  raizCuadrada,
  sumar,
} from './calculator.js';

const rl = readline.createInterface({ input, output });

function clearScreen(): void {
  console.clear();
}

function printMenu(): void {
  for (const line of obtenerLineasMenu()) {
    console.log(line);
  }
}

async function readNumber(label: string): Promise<number> {
  while (true) {
    const answer = await rl.question(`${label}: `);
    const value = Number(answer);

    if (!Number.isFinite(value)) {
      console.log('❌ Debes ingresar un número válido.');
      continue;
    }

    return value;
  }
}

function showResult(operation: string, result: number): void {
  console.log(`\n✅ ${operation}: ${result}`);
}

async function manejarSuma(): Promise<void> {
  const a = await readNumber('Ingresa el primer número');
  const b = await readNumber('Ingresa el segundo número');
  showResult('Resultado de la suma', sumar(a, b));
}

async function manejarResta(): Promise<void> {
  const a = await readNumber('Ingresa el primer número');
  const b = await readNumber('Ingresa el segundo número');
  showResult('Resultado de la resta', restar(a, b));
}

async function manejarMultiplicacion(): Promise<void> {
  const a = await readNumber('Ingresa el primer número');
  const b = await readNumber('Ingresa el segundo número');
  showResult('Resultado de la multiplicación', multiplicar(a, b));
}

async function manejarDivision(): Promise<void> {
  const a = await readNumber('Ingresa el dividendo');
  const b = await readNumber('Ingresa el divisor');

  try {
    showResult('Resultado de la división', dividir(a, b));
  } catch (error) {
    console.log(`❌ ${(error as Error).message}`);
  }
}

async function manejarPotencia(): Promise<void> {
  const base = await readNumber('Ingresa la base');
  const exponent = await readNumber('Ingresa el exponente');
  showResult('Resultado de la potencia', potencia(base, exponent));
}

async function manejarRaizCuadrada(): Promise<void> {
  const value = await readNumber('Ingresa un número');

  try {
    showResult('Resultado de la raíz cuadrada', raizCuadrada(value));
  } catch (error) {
    console.log(`❌ ${(error as Error).message}`);
  }
}

async function manejarLogaritmo(): Promise<void> {
  const value = await readNumber('Ingresa un número positivo');

  try {
    showResult('Resultado del logaritmo natural', logaritmoNatural(value));
  } catch (error) {
    console.log(`❌ ${(error as Error).message}`);
  }
}

async function main(): Promise<void> {
  while (true) {
    clearScreen();
    printMenu();

    const option = await rl.question('Selecciona una opción: ');

    switch (option.trim()) {
      case '1':
        await manejarSuma();
        break;
      case '2':
        await manejarResta();
        break;
      case '3':
        await manejarMultiplicacion();
        break;
      case '4':
        await manejarDivision();
        break;
      case '5':
        await manejarPotencia();
        break;
      case '6':
        await manejarRaizCuadrada();
        break;
      case '7':
        await manejarLogaritmo();
        break;
      case '8':
        console.log('\n👋 Gracias por usar la calculadora. ¡Hasta luego!');
        await rl.close();
        return;
      default:
        console.log('❌ Opción no válida. Inténtalo de nuevo.');
    }

    await rl.question('\nPresiona Enter para continuar...');
  }
}

main().catch((error: unknown) => {
  console.error('Ocurrió un error inesperado:', error);
  rl.close();
});
