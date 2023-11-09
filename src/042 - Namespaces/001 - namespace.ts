/// <reference path="002 - module.ts" />

// namespace Validation {
//   export interface StringValidator {
//     isAcceptable(s: string): boolean;
//   }
//   const lettersRegexp = /^[A-Za-z]+$/;
//   const numberRegexp = /^[0-9]+$/;
//   export class LettersOnlyValidator implements StringValidator {
//     isAcceptable(s: string) {
//       return lettersRegexp.test(s);
//     }
//   }
//   export class ZipCodeValidator implements StringValidator {
//     isAcceptable(s: string) {
//       return s.length === 5 && numberRegexp.test(s);
//     }
//   }
// }
// Alguns exemplos
let strings = ["Hello", "98052", "101"];
// Validadores para usar
let validators: { [s: string]: Validation.StringValidator } = {}; // define objeto cujas chaves são strings e os valores são os obetos definidos no Nnamespace
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// Mostrar qual string passou por qual validador
for (let s of strings) {
  for (let name in validators) {
    console.log(
      `"${s}" - ${
        validators[name].isAcceptable(s) ? "matches" : "does not match"
      } ${name}`
    );
  }
}
