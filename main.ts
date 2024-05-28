

import { generatePassword, hashPassword } from "./lib/app";
import { logger } from "./lib/logger";
import { time } from "./lib/times"

const password = generatePassword({
  length: 30,
  useSymbols: true,
});

logger.info(
  `le nouveau mot passe est: ${password}, son hashage est de ${hashPassword(
    password
  )}`
);

logger.info(`heure : ${time()}`);