import dotenv from 'dotenv';

// Charger les variables d'environnement à partir du fichier .env
dotenv.config();

// Définir le type pour les clés de configuration
type ConfigKey = string | string[];

// Interface pour l'objet de configuration
interface Config {
  [key: string]: any;
}

// Initialiser l'objet de configuration avec les valeurs de process.env
const config: Config = {
  ...process.env,
};

// Fonction pour récupérer les valeurs de configuration
const getConfig = (key: ConfigKey, defaultValue: any = null): any => {
  if (Array.isArray(key)) {
    return key.reduce((acc, k) => {
      acc[k] = config[k] !== undefined ? config[k] : defaultValue;
      return acc;
    }, {} as Config);
  }

  return config[key] !== undefined ? config[key] : defaultValue;
};

// Exporter la fonction get
export { getConfig };
