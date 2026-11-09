/**
 * MÓDULO CALCULADORA - GESTIONEMOS
 * 
 * Propósito: Proporciona operaciones matemáticas básicas y avanzadas
 * Características principales:
 * ✓ Operaciones aritméticas básicas (suma, resta, multiplicación, división)
 * ✓ Operaciones avanzadas (potencia, raíz cuadrada)
 * ✓ Validaciones de errores (división por cero, raíces negativas)
 * ✓ Interfaz de menú interactivo en castellano
 */

/**
 * Suma dos números
 * @param a Primer número
 * @param b Segundo número
 * @returns La suma de a + b
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Resta dos números
 * @param a Minuendo
 * @param b Sustraendo
 * @returns La diferencia a - b
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Multiplica dos números
 * @param a Primer número
 * @param b Segundo número
 * @returns El producto a * b
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Divide dos números con validación
 * ⚠️ PUNTO IMPORTANTE: Valida que el divisor no sea cero
 * 
 * @param a Dividendo
 * @param b Divisor
 * @returns El cociente a / b
 * @throws Error si b es igual a cero (división no definida)
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('No se puede dividir entre cero.');
  }

  return a / b;
}

/**
 * Calcula la potencia de un número
 * @param base Número base
 * @param exponent Exponente de elevación
 * @returns El resultado de base^exponent
 */
export function power(base: number, exponent: number): number {
  return base ** exponent;
}

/**
 * Calcula la raíz cuadrada con validación
 * ⚠️ PUNTO IMPORTANTE: Valida que el número no sea negativo
 * (En números reales, la raíz cuadrada de negativos no está definida)
 * 
 * @param value Número del cual calcular la raíz
 * @returns La raíz cuadrada de value
 * @throws RangeError si value es menor que cero
 */
export function squareRoot(value: number): number {
  if (value < 0) {
    throw new RangeError('La raíz cuadrada de un número negativo no es válida en los números reales.');
  }

  return Math.sqrt(value);
}

/**
 * Genera el menú interactivo para la interfaz de terminal
 * 
 * 📋 PUNTO IMPORTANTE: Retorna un array de strings que conforman el menú
 * Las opciones se presentan en castellano para mejor UX
 * 
 * @returns Array con las líneas del menú decorado
 */

export function logarithm(value: number): number {
  if (value <= 0) {
    throw new RangeError('El logaritmo solo está definido para números positivos.');
  }

  return Math.log(value);
}

export function getMenuLines(): string[] {
  return [
    '========================================',
    '          GESTIONEMOS CALCULATOR       ',
    '========================================',
    '1. Add',
    '2. Subtract',
    '3. Multiply',
    '4. Divide',
    '5. Power',
    '6. Square root',
    '7. Logarithm',
    '8. Exit',
    '========================================',
  ];
}
