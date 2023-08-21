type Vehicle = {
  brand: string;
  year: number;
};

// provocar o espelhamento de tipos.
type Car = {
  brand: Vehicle['brand'];
  year: Vehicle['year'];
  name: string;
};

const car: Car = {
  brand: 'ford',
  year: 2020,
  name: 'focus',
};

console.log(car.brand);
