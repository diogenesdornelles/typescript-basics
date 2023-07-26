// como opcional, lastName pode ou não estar definido.

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

const squareOf: (a: any) => any = (a) => {
  if (typeof a !== 'number') return null;
  return a ** 2;
};
