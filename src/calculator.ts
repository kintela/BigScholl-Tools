/**
 * MÓDULO CALCULADORA - GESTIONEMOS
 *
 * Propósito: Proporciona operaciones matemáticas básicas y avanzadas.
 * Características principales:
 * ✓ Operaciones aritméticas básicas (suma, resta, multiplicación, división)
 * ✓ Operaciones avanzadas (potencia, raíz cuadrada, logaritmo)
 * ✓ Validaciones de errores (división por cero, raíces negativas)
 * ✓ Compatibilidad con nombres en español y en inglés
 */

/**
 * Suma dos números.
 * @param a Primer número
 * @param b Segundo número
 * @returns La suma de a + b
 */
export function sumar(a: number, b: number): number {
  return a + b;
}

export function add(a: number, b: number): number {
  return sumar(a, b);
}

/**
 * Resta dos números.
 * @param a Minuendo
 * @param b Sustraendo
 * @returns La diferencia a - b
 */
export function restar(a: number, b: number): number {
  return a - b;
}

export function subtract(a: number, b: number): number {
  return restar(a, b);
}

/**
 * Multiplica dos números.
 * @param a Primer número
 * @param b Segundo número
 * @returns El producto a * b
 */
export function multiplicar(a: number, b: number): number {
  return a * b;
}

export function multiply(a: number, b: number): number {
  return multiplicar(a, b);
}

/**
 * Divide dos números con validación.
 * ⚠️ PUNTO IMPORTANTE: Valida que el divisor no sea cero.
 *
 * @param a Dividendo
 * @param b Divisor
 * @returns El cociente a / b
 * @throws Error si b es igual a cero (división no definida)
 */
export function dividir(a: number, b: number): number {
  if (b === 0) {
   throw new Error('No se puede dividir entre cero.');
  }

  return a / b;
}

export function divide(a: number, b: number): number {
  return dividir(a, b);
}

/**
 * Calcula la potencia de un número.
 * @param base Número base
 * @param exponent Exponente de elevación
 * @returns El resultado de base^exponent
 */
export function potencia(base: number, exponent: number): number {
  return base ** exponent;
}

export function power(base: number, exponent: number): number {
  return potencia(base, exponent);
}

/**
 * Calcula la raíz cuadrada con validación.
 * ⚠️ PUNTO IMPORTANTE: Valida que el número no sea negativo.
 * (En números reales, la raíz cuadrada de negativos no está definida)
 *
 * @param value Número del cual calcular la raíz
 * @returns La raíz cuadrada de value
 * @throws RangeError si value es menor que cero
 */
export function raizCuadrada(value: number): number {
  if (value < 0) {
   throw new RangeError('La raíz cuadrada de un número negativo no es válida en los números reales.');
  }

  return Math.sqrt(value);
}

export function squareRoot(value: number): number {
  return raizCuadrada(value);
}

/**
 * Calcula el logaritmo natural con validación.
 * @param value Número positivo
 * @returns El logaritmo natural de value
 * @throws RangeError si value es menor o igual a cero
 */
export function logaritmoNatural(value: number): number {
  if (value <= 0) {
   throw new RangeError('El logaritmo solo está definido para números positivos.');
  }

  return Math.log(value);
}

export function naturalLogarithm(value: number): number {
  return logaritmoNatural(value);
}

/**
 * Genera el menú interactivo para la interfaz de terminal.
 *
 * @returns Array con las líneas del menú con opciones en inglés para mantener la compatibilidad
 * del código del branch principal.
 */
export function obtenerLineasMenu(): string[] {
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

export function getMenuLines(): string[] {
  return obtenerLineasMenu();
}
