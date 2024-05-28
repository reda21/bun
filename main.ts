import { generatePassword } from "./lib/app";

console.info("tester le clone");

//c'est de la merde

console.info(
  "new password is: " +
    generatePassword({
      length: 30,
      useSymbols: true,
    })
);
