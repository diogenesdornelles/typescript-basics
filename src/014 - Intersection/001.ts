type HasName = { name: string };
type HasSurname = { surname: string };
type HasAge = { age: number };

// union
type PersonA = HasAge | HasName | HasSurname;

// intersection
type PersonB = HasAge & HasName & HasSurname;

// both
type PersonC = HasAge & (HasName | HasSurname);

const p: PersonB = {
  name: 'Dora',
  surname: 'Aventureira',
  age: 12,
};

export { p };
