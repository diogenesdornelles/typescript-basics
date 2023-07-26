// apelidos
type Pessoa = {
  readonly nome: string;
  idade: number;
  salario: number;
  corPreferida?: CorPreferida;
  interestings?: Interestings;
};

type CorRGB = 'Red' | 'Green' | 'Blue';
type CorCMKY = 'Chyano' | 'Magente' | 'Yellow';

type CorPreferida = CorCMKY | CorRGB;

type Interestings = string[];

let pessoa: Pessoa = {
  nome: 'Dio',
  idade: 38,
  salario: 200_000,
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

pessoa = setCorPreferida(pessoa, 'Blue');

export function addInteresting(pessoa: Pessoa, interesting: string): Pessoa {
  if (!pessoa.interestings) pessoa.interestings = [];
  return { ...pessoa, interestings: [...pessoa.interestings, interesting] };
}

pessoa = addInteresting(pessoa, 'codar');
pessoa = addInteresting(pessoa, 'dormir');

console.log(pessoa);
