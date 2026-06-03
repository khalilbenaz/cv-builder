import React from "react";
import type { CVData } from "../types";

interface Props {
  data: CVData;
}

/**
 * Template ATS-friendly : une colonne, noir sur blanc, sans icônes ni
 * éléments graphiques — optimisé pour les parseurs de candidatures.
 */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[12px] font-bold uppercase tracking-wide text-black border-b border-black pb-0.5 mb-2.5">
      {children}
    </h2>
  );
}

export default function AtsTemplate({ data }: Props) {
  const { personal, resume, experiences, formations, competences, langues } = data;

  return (
    <div
      className="px-10 py-8 text-black"
      style={{ fontFamily: "Arial, Helvetica, sans-serif", minHeight: "842px" }}
    >
      {/* En-tête */}
      <div className="mb-5">
        <h1 className="text-[24px] font-bold leading-tight">{personal.nom || "Votre Nom"}</h1>
        {personal.titre && <p className="text-[13px] mt-0.5">{personal.titre}</p>}
        <p className="text-[11px] mt-1.5">
          {[personal.email, personal.telephone, personal.ville, personal.site]
            .filter(Boolean)
            .join(" | ")}
        </p>
      </div>

      {resume && (
        <div className="mb-5">
          <SectionTitle>Profil</SectionTitle>
          <p className="text-[11px] leading-relaxed">{resume}</p>
        </div>
      )}

      {experiences.length > 0 && (
        <div className="mb-5">
          <SectionTitle>Expérience professionnelle</SectionTitle>
          <ul className="space-y-3">
            {experiences.map((exp) => (
              <li key={exp.id}>
                <p className="text-[11.5px] font-bold">
                  {exp.poste}
                  {exp.entreprise && ` — ${exp.entreprise}`}
                </p>
                {exp.periode && <p className="text-[10.5px]">{exp.periode}</p>}
                {exp.description && (
                  <p className="mt-0.5 text-[11px] leading-relaxed">{exp.description}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {formations.length > 0 && (
        <div className="mb-5">
          <SectionTitle>Formation</SectionTitle>
          <ul className="space-y-1.5">
            {formations.map((f) => (
              <li key={f.id} className="text-[11px]">
                <span className="font-bold">{f.diplome}</span>
                {f.ecole && ` — ${f.ecole}`}
                {f.periode && ` (${f.periode})`}
              </li>
            ))}
          </ul>
        </div>
      )}

      {competences.length > 0 && (
        <div className="mb-5">
          <SectionTitle>Compétences</SectionTitle>
          <p className="text-[11px] leading-relaxed">
            {competences.filter((c) => c.label.trim()).map((c) => c.label).join(", ")}
          </p>
        </div>
      )}

      {langues.length > 0 && (
        <div>
          <SectionTitle>Langues</SectionTitle>
          <p className="text-[11px] leading-relaxed">
            {langues
              .filter((l) => l.langue.trim())
              .map((l) => (l.niveau ? `${l.langue} (${l.niveau})` : l.langue))
              .join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}
