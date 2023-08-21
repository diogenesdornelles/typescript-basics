// extrai um tipo equivalente ao modelo
type CoresObj = typeof coresObj;
// extrai as chaves do tipo
type CoresKeys = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

type TraduzirCor = (cor: CoresKeys, cores: CoresObj) => string;

const traduzirCor: TraduzirCor = (cor: CoresKeys, cores: CoresObj): string => {
  return cores[cor];
};

console.log(traduzirCor('vermelho', coresObj));

export default 1;
