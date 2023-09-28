type GetKeyOfFn = <O, K extends keyof O>(obj: O, key: K) => O[K];

export const getKeyOfFn: GetKeyOfFn = (obj, key) => obj[key];

const theme = {
  date: '01/02/1987',
  event: 'nothing occurred'
}

console.log(getKeyOfFn(theme, 'event'));
