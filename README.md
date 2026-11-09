# Gestionemos Calculator (TypeScript)

Calculadora de terminal desarrollada en TypeScript con menú interactivo y tests automáticos.

## Características

- Menú interactivo en consola.
- Operaciones disponibles:
  - Add
  - Subtract
  - Multiply
  - Divide
  - Power
  - Square root
- Validación de casos de error:
  - División entre cero.
  - Raíz cuadrada de números negativos.
- Tests unitarios con `node:test` ejecutados con `tsx`.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Scripts disponibles

```bash
# Compila TypeScript a /dist
npm run build

# Ejecuta la app compilada
npm start

# Ejecuta la app en modo desarrollo (sin compilar manualmente)
npm run dev

# Ejecuta los tests
npm test
```

## Flujo recomendado

Si haces cambios en `src/` y quieres usar `npm start`, compila antes:

```bash
npm run build
npm start
```

Para desarrollo rápido, usa:

```bash
npm run dev
```

## Estructura del proyecto

```text
src/
  calculator.ts       # Lógica pura de operaciones y menú
  calculator.test.ts  # Tests unitarios
  index.ts            # Interfaz interactiva por terminal
```

## Ejemplo de uso

1. Ejecuta `npm run dev` o `npm start`.
2. Selecciona una opción del menú.
3. Introduce los números solicitados.
4. Revisa el resultado y continúa o sal con la opción 7.
