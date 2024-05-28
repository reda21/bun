import { generatePassword, hashPassword } from "./lib/app";

const password = generatePassword({
  length: 30,
  useSymbols: true,
});

console.info(`le nouveau mot passe est: ${password}, son hashage est de ${hashPassword(password)}`);

console.info("done");
