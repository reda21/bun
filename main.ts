import { generatePassword } from "./lib/app";

console.info('tester le clone') //clone is ok

console.info(
  "new password is: " +
    generatePassword({
      length: 30,
      useSymbols: true
    })
);
