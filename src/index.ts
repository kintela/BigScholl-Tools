import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import {
  add,
  divide,
  getMenuLines,
  multiply,
  power,
  squareRoot,
  subtract,
} from './calculator.js';

const rl = readline.createInterface({ input, output });

function clearScreen(): void {
  console.clear();
}

function printMenu(): void {
  for (const line of getMenuLines()) {
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

async function handleSum(): Promise<void> {
  const a = await readNumber('Ingresa el primer número');
  const b = await readNumber('Ingresa el segundo número');
  showResult('Resultado de la suma', add(a, b));
}

async function handleSubtract(): Promise<void> {
  const a = await readNumber('Ingresa el primer número');
  const b = await readNumber('Ingresa el segundo número');
  showResult('Resultado de la resta', subtract(a, b));
}

async function handleMultiply(): Promise<void> {
  const a = await readNumber('Ingresa el primer número');
  const b = await readNumber('Ingresa el segundo número');
  showResult('Resultado de la multiplicación', multiply(a, b));
}

async function handleDivide(): Promise<void> {
  const a = await readNumber('Ingresa el dividendo');
  const b = await readNumber('Ingresa el divisor');

  try {
    showResult('Resultado de la división', divide(a, b));
  } catch (error) {
    console.log(`❌ ${(error as Error).message}`);
  }
}

async function handlePower(): Promise<void> {
  const base = await readNumber('Ingresa la base');
  const exponent = await readNumber('Ingresa el exponente');
  showResult('Resultado de la potencia', power(base, exponent));
}

async function handleSquareRoot(): Promise<void> {
  const value = await readNumber('Ingresa un número');

  try {
    showResult('Resultado de la raíz cuadrada', squareRoot(value));
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
        await handleSum();
        break;
      case '2':
        await handleSubtract();
        break;
      case '3':
        await handleMultiply();
        break;
      case '4':
        await handleDivide();
        break;
      case '5':
        await handlePower();
        break;
      case '6':
        await handleSquareRoot();
        break;
      case '7':
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
