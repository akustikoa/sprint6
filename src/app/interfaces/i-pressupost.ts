import { iExtres } from './i-extres';

export interface iPressupost {
  serveis: [];
  usuari: {
    nom: string;
    telefon: number;
    email: string;
  };
  pressupostTotal: number;
  extres: iExtres;
}
