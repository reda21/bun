import winston from "winston";
import { getConfig } from "./config";

// Définition des chemins des fichiers de log
const baseLogPath = getConfig("LOG_PATH", "storage/logger");
const logPaths = {
  error: `${baseLogPath}/error.log`,
  info: `${baseLogPath}/info.log`,
  debug: `${baseLogPath}/debug.log`,
  warn: `${baseLogPath}/warn.log`
};

const transports = Object.entries(logPaths).map(([level, path]) => {
  return new winston.transports.File({ filename: path, level });
});

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports,
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    })
  );
}

export { logger };