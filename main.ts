import { generatePassword } from "./lib/app";

console.info(
  "new password is: " +
    generatePassword({
      length: 30,
      useSymbols: true,
    })
);

console.info("done");
