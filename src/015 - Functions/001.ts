// type a fn: type <name> = <params> => <return type>
type MapArrSqrt = (a: number) => number;

function mapArrSqrt(arr: number[], cb: MapArrSqrt): number[] {
  const n_arr: Array<number> = [];
  for (let i = 0; i < arr.length; i++) {
    n_arr.push(cb(arr[i]));
  }
  return n_arr;
}

const toSqrt: MapArrSqrt = (a) => {
  return Math.sqrt(a);
};

const arrNumbers: number[] = [1, 2, 3, 4];

const result = mapArrSqrt(arrNumbers, toSqrt);

console.log(result);

export default 1;
