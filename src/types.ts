export interface PersonalInfo {
  nom: string;
  titre: string;
  email: string;
  telephone: string;
  ville: string;
  site: string;
  /** Photo de profil encodée en data URL (optionnelle) */
  photo?: string;
}

export interface Experience {
  id: string;
  poste: string;
  entreprise: string;
  periode: string;
  description: string;
}

export interface Formation {
  id: string;
  diplome: string;
  ecole: string;
  periode: string;
}

export interface Competence {
  id: string;
  label: string;
}

export interface Langue {
  id: string;
  langue: string;
  niveau: string;
}

export interface CVData {
  personal: PersonalInfo;
  resume: string;
  experiences: Experience[];
  formations: Formation[];
  competences: Competence[];
  langues: Langue[];
}
