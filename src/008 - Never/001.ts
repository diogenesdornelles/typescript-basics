// nunca retorna algo

export function appError(): never {
  throw new Error('An error has occurred');
}

appError();
