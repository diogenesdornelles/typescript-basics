let b: 100 = 100 as const; // eslint-disable-line

const a = 100 as const;

const person = {
  name: 'Elis' as const,
  suname: 'Batista',
};

// Is not possible 'cause is const
// person.name = 'Elisangela';
person.suname = 'Maciel';

// param as an literal, like enum
function chooseColor(color: 'red' | 'yellow' | 'blue'): void {
  console.log(color);
}

chooseColor('red');

export default a;
