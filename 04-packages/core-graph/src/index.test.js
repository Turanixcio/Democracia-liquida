import { describe, it, expect } from 'vitest';

describe('Comprobación del entorno de pruebas', () => {
  it('debería sumar dos números correctamente', () => {
    const resultado = 2 + 2;
    expect(resultado).toBe(4);
  });
});