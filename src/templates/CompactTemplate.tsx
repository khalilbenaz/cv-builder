import React from "react";
import type { CVData } from "../types";

interface Props {
  data: CVData;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-700 bg-sky-50 border-l-4 border-sky-600 pl-2 py-0.5 mb-2.5">
      {children}
    </h2>
  );
}

export default function CompactTemplate({ data }: Props) {
  const { personal, resume, experiences, formations, competences, langues } = data;

  return (
    <div
      className="px-8 py-7"
      style={{ fontFamily: "'Inter', system-ui, sans-serif", minHeight: "842px" }}
    >
      {/* En-tête compact */}
      <div className="flex items-end justify-between flex-wrap gap-2 border-b-4 border-sky-600 pb-3 mb-5">
        <div className="flex items-center gap-4">
          {personal.photo && (
            <img
              src={personal.photo}
              alt=""
              className="w-16 h-16 rounded-full object-cover border-2 border-sky-600 shrink-0"
            />
          )}
        <div>
          <h1 className="text-[22px] font-extrabold text-gray-900 leading-tight">
            {personal.nom || "Votre Nom"}
          </h1>
          {personal.titre && (
            <p className="text-[12px] text-sky-700 font-semibold">{personal.titre}</p>
          )}
        </div>
        </div>
        <div className="text-right text-[10px] text-gray-500 leading-relaxed">
          {personal.email && <p>{personal.email}</p>}
          {personal.telephone && <p>{personal.telephone}</p>}
          {[personal.ville, personal.site].filter(Boolean).length > 0 && (
            <p>{[personal.ville, personal.site].filter(Boolean).join(" · ")}</p>
          )}
        </div>
      </div>

      {/* Profil */}
      {resume && (
        <div className="mb-5">
          <SectionTitle>Profil</SectionTitle>
          <p className="text-[11px] text-gray-600 leading-relaxed">{resume}</p>
        </div>
      )}

      {/* Expériences */}
      {experiences.length > 0 && (
        <div className="mb-5">
          <SectionTitle>Expériences professionnelles</SectionTitle>
          <ul className="space-y-3.5">
            {experiences.map((exp) => (
              <li key={exp.id}>
                <div className="flex items-baseline justify-between flex-wrap gap-1">
                  <p className="text-[11.5px] font-bold text-gray-900">
                    {exp.poste}
                    {exp.entreprise && (
                      <span className="font-semibold text-sky-700"> · {exp.entreprise}</span>
                    )}
                  </p>
                  {exp.periode && (
                    <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">{exp.periode}</span>
                  )}
                </div>
                {exp.description && (
                  <p className="mt-0.5 text-[10.5px] text-gray-600 leading-relaxed">{exp.description}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Formations */}
      {formations.length > 0 && (
        <div className="mb-5">
          <SectionTitle>Formations</SectionTitle>
          <ul className="space-y-1.5">
            {formations.map((f) => (
              <li key={f.id} className="flex items-baseline justify-between flex-wrap gap-1">
                <p className="text-[11px] text-gray-900">
                  <span className="font-bold">{f.diplome}</span>
                  {f.ecole && <span className="text-gray-500"> — {f.ecole}</span>}
                </p>
                {f.periode && (
                  <span className="text-[10px] text-gray-400 whitespace-nowrap">{f.periode}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-2 gap-6">
        {/* Compétences */}
        {competences.length > 0 && (
          <div>
            <SectionTitle>Compétences</SectionTitle>
            <div className="flex flex-wrap gap-1">
              {competences
                .filter((c) => c.label.trim())
                .map((c) => (
                  <span
                    key={c.id}
                    className="inline-block rounded bg-sky-50 text-sky-800 text-[9.5px] font-semibold px-2 py-0.5 border border-sky-200"
                  >
                    {c.label}
                  </span>
                ))}
            </div>
          </div>
        )}

        {/* Langues */}
        {langues.length > 0 && (
          <div>
            <SectionTitle>Langues</SectionTitle>
            <ul className="space-y-1">
              {langues.map((l) => (
                <li key={l.id} className="text-[10.5px] text-gray-700 flex justify-between max-w-[200px]">
                  <span className="font-bold">{l.langue || "—"}</span>
                  <span className="text-sky-700">{l.niveau || "—"}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
