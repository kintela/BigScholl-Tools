export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('No se puede dividir entre cero.');
  }

  return a / b;
}

export function power(base: number, exponent: number): number {
  return base ** exponent;
}

export function squareRoot(value: number): number {
  if (value < 0) {
    throw new RangeError('La raíz cuadrada de un número negativo no es válida en los números reales.');
  }

  return Math.sqrt(value);
}

export function getMenuLines(): string[] {
  return [
    '╔════════════════════════════════════════╗',
    '║                                        ║',
    '║      ★ CALCULADORA GESTIONEMOS ★      ║',
    '║                                        ║',
    '╠════════════════════════════════════════╣',
    '║                                        ║',
    '║  ► 1. Suma                             ║',
    '║  ► 2. Resta                            ║',
    '║  ► 3. Multiplicación                   ║',
    '║  ► 4. División                         ║',
    '║  ► 5. Potencia                         ║',
    '║  ► 6. Raíz Cuadrada                    ║',
    '║  ► 7. Salir                            ║',
    '║                                        ║',
    '╚════════════════════════════════════════╝',
  ];
}
