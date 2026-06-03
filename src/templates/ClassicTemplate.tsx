import React from "react";
import type { CVData } from "../types";

interface Props {
  data: CVData;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-800 border-b-2 border-[color:var(--ac-dark)] pb-1 mb-3">
      {children}
    </h2>
  );
}

export default function ClassicTemplate({ data }: Props) {
  const { personal, resume, experiences, formations, competences, langues } = data;

  return (
    <div
      className="px-10 py-8"
      style={{ fontFamily: "Georgia, 'Times New Roman', serif", minHeight: "842px" }}
    >
      {/* En-tête centré */}
      <div className="text-center border-b-2 border-[color:var(--ac-dark)] pb-5 mb-6">
        {personal.photo && (
          <img
            src={personal.photo}
            alt=""
            className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-[color:var(--ac-dark)]"
          />
        )}
        <h1 className="text-3xl font-bold tracking-wide text-gray-900 uppercase">
          {personal.nom || "Votre Nom"}
        </h1>
        {personal.titre && (
          <p className="text-[13px] text-gray-600 italic mt-1">{personal.titre}</p>
        )}
        <p className="mt-2 text-[11px] text-gray-500">
          {[personal.email, personal.telephone, personal.ville, personal.site]
            .filter(Boolean)
            .join("  •  ")}
        </p>
      </div>

      {/* Profil */}
      {resume && (
        <div className="mb-6">
          <SectionTitle>Profil</SectionTitle>
          <p className="text-[11.5px] text-gray-700 leading-relaxed text-justify">{resume}</p>
        </div>
      )}

      {/* Expériences */}
      {experiences.length > 0 && (
        <div className="mb-6">
          <SectionTitle>Expériences professionnelles</SectionTitle>
          <ul className="space-y-4">
            {experiences.map((exp) => (
              <li key={exp.id}>
                <div className="flex items-baseline justify-between flex-wrap gap-1">
                  <p className="text-[12px] font-bold text-gray-900">
                    {exp.poste}
                    {exp.entreprise && (
                      <span className="font-normal italic text-gray-600"> — {exp.entreprise}</span>
                    )}
                  </p>
                  {exp.periode && (
                    <span className="text-[10.5px] text-gray-500 whitespace-nowrap">{exp.periode}</span>
                  )}
                </div>
                {exp.description && (
                  <p className="mt-1 text-[11px] text-gray-700 leading-relaxed text-justify">{exp.description}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Formations */}
      {formations.length > 0 && (
        <div className="mb-6">
          <SectionTitle>Formations</SectionTitle>
          <ul className="space-y-2.5">
            {formations.map((f) => (
              <li key={f.id} className="flex items-baseline justify-between flex-wrap gap-1">
                <p className="text-[11.5px] text-gray-900">
                  <span className="font-bold">{f.diplome}</span>
                  {f.ecole && <span className="italic text-gray-600"> — {f.ecole}</span>}
                </p>
                {f.periode && (
                  <span className="text-[10.5px] text-gray-500 whitespace-nowrap">{f.periode}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Compétences */}
        {competences.length > 0 && (
          <div>
            <SectionTitle>Compétences</SectionTitle>
            <p className="text-[11px] text-gray-700 leading-relaxed">
              {competences
                .filter((c) => c.label.trim())
                .map((c) => c.label)
                .join("  •  ")}
            </p>
          </div>
        )}

        {/* Langues */}
        {langues.length > 0 && (
          <div>
            <SectionTitle>Langues</SectionTitle>
            <ul className="space-y-1">
              {langues.map((l) => (
                <li key={l.id} className="text-[11px] text-gray-700">
                  <span className="font-bold">{l.langue || "—"}</span>
                  {l.niveau && <span className="italic text-gray-500"> — {l.niveau}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
