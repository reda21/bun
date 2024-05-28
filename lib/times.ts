
import moment from 'moment';
import 'moment/locale/fr'; // Importer la localisation française

// Configurer moment pour utiliser la localisation française
moment.locale('fr');

/**
 * Retourne l'heure et la date actuelle en français.
 * @returns {string} La date et l'heure formatée en français.
 */
const time = (): string => {
  return moment().format('[le] dddd D MMMM YYYY [à] HH:mm'); // Format complet avec jour, date, heure
};

// Exporter la fonction
export { time };

