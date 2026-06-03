import React from "react";
import type { CVData } from "../types";

interface Props {
  data: CVData;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400 mb-3">
      {children}
    </h2>
  );
}

export default function MinimalTemplate({ data }: Props) {
  const { personal, resume, experiences, formations, competences, langues } = data;

  return (
    <div
      className="px-10 py-10"
      style={{ fontFamily: "'Inter', system-ui, sans-serif", minHeight: "842px" }}
    >
      {/* En-tête */}
      <div className="mb-8 flex items-start justify-between gap-6">
        <div>
        <h1 className="text-[28px] font-light tracking-tight text-gray-900 leading-tight">
          {personal.nom || "Votre Nom"}
        </h1>
        {personal.titre && (
          <p className="text-[13px] text-gray-500 mt-1">{personal.titre}</p>
        )}
        <p className="mt-3 text-[10.5px] text-gray-400 tracking-wide">
          {[personal.email, personal.telephone, personal.ville, personal.site]
            .filter(Boolean)
            .join("   ·   ")}
        </p>
        </div>
        {personal.photo && (
          <img
            src={personal.photo}
            alt=""
            className="w-20 h-20 rounded-full object-cover grayscale shrink-0"
          />
        )}
      </div>

      {/* Profil */}
      {resume && (
        <div className="mb-8">
          <SectionTitle>Profil</SectionTitle>
          <p className="text-[11.5px] text-gray-600 leading-relaxed">{resume}</p>
        </div>
      )}

      {/* Expériences */}
      {experiences.length > 0 && (
        <div className="mb-8">
          <SectionTitle>Expériences</SectionTitle>
          <ul className="space-y-5">
            {experiences.map((exp) => (
              <li key={exp.id} className="grid grid-cols-[110px_1fr] gap-4">
                <span className="text-[10.5px] text-gray-400 pt-0.5 whitespace-pre-line">
                  {exp.periode}
                </span>
                <div>
                  {exp.poste && (
                    <p className="text-[12px] font-semibold text-gray-900 leading-tight">{exp.poste}</p>
                  )}
                  {exp.entreprise && (
                    <p className="text-[11px] text-gray-500">{exp.entreprise}</p>
                  )}
                  {exp.description && (
                    <p className="mt-1 text-[11px] text-gray-600 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Formations */}
      {formations.length > 0 && (
        <div className="mb-8">
          <SectionTitle>Formations</SectionTitle>
          <ul className="space-y-3">
            {formations.map((f) => (
              <li key={f.id} className="grid grid-cols-[110px_1fr] gap-4">
                <span className="text-[10.5px] text-gray-400 pt-0.5">{f.periode}</span>
                <div>
                  {f.diplome && (
                    <p className="text-[11.5px] font-semibold text-gray-900">{f.diplome}</p>
                  )}
                  {f.ecole && <p className="text-[11px] text-gray-500">{f.ecole}</p>}
                </div>
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
            <p className="text-[11px] text-gray-600 leading-relaxed">
              {competences
                .filter((c) => c.label.trim())
                .map((c) => c.label)
                .join(" · ")}
            </p>
          </div>
        )}

        {/* Langues */}
        {langues.length > 0 && (
          <div>
            <SectionTitle>Langues</SectionTitle>
            <ul className="space-y-1">
              {langues.map((l) => (
                <li key={l.id} className="text-[11px] text-gray-600 flex justify-between max-w-[200px]">
                  <span className="font-medium text-gray-800">{l.langue || "—"}</span>
                  <span className="text-gray-400">{l.niveau || "—"}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
