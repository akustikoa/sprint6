export interface iPressupost {
  serveis: any[];
  usuari: {
    nom: string;
    telefon: string;
    email: string;
  };
  pressupostTotal: number;
  extres: iExtres;
  data: string;
}

export interface iExtres {
  quantitatPagines: number;
  quantitatLlenguatges: number;
}


