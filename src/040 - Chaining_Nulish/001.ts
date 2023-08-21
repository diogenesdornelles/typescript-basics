type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'seila',
  texto: 'sjhajsdhd',
};

// encademento opcional suprime a chamada de método se for null ou undefined
// coalescência nula: checa se o que está do lado esquerdo do operador é um não-valor,
// se for falsy executa

console.log(documento.data?.getDate ?? 'Ops, data não existe no objeto');
