import React from "react";
import type { CVData } from "../types";

interface Props {
  data: CVData;
}

/* SVG icons inline */
function IconEmail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  );
}
function IconLink() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
    </svg>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <h2 className="text-[11px] font-bold uppercase tracking-[0.15em] text-indigo-700">{children}</h2>
      <div className="flex-1 h-px bg-indigo-200" />
    </div>
  );
}

export default function CVPreview({ data }: Props) {
  const { personal, resume, experiences, formations, competences, langues } = data;

  return (
    <div
      id="cv-preview"
      className="bg-white shadow-lg rounded-xl overflow-hidden"
      style={{ fontFamily: "'Inter', system-ui, sans-serif", minHeight: "842px" }}
    >
      {/* En-tête */}
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-500 px-8 py-7 text-white">
        <h1 className="text-2xl font-bold tracking-tight leading-tight">
          {personal.nom || "Votre Nom"}
        </h1>
        {personal.titre && (
          <p className="text-indigo-200 text-sm font-medium mt-0.5">{personal.titre}</p>
        )}
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
          {personal.email && (
            <span className="flex items-center gap-1.5 text-xs text-indigo-100">
              <IconEmail />
              {personal.email}
            </span>
          )}
          {personal.telephone && (
            <span className="flex items-center gap-1.5 text-xs text-indigo-100">
              <IconPhone />
              {personal.telephone}
            </span>
          )}
          {personal.ville && (
            <span className="flex items-center gap-1.5 text-xs text-indigo-100">
              <IconPin />
              {personal.ville}
            </span>
          )}
          {personal.site && (
            <span className="flex items-center gap-1.5 text-xs text-indigo-100">
              <IconLink />
              {personal.site}
            </span>
          )}
        </div>
      </div>

      {/* Corps du CV */}
      <div className="grid grid-cols-3 gap-0">
        {/* Colonne gauche */}
        <div className="col-span-1 bg-gray-50 px-5 py-6 border-r border-gray-100">
          {/* Compétences */}
          {competences.length > 0 && (
            <div className="mb-6">
              <SectionTitle>Compétences</SectionTitle>
              <div className="flex flex-wrap gap-1.5">
                {competences
                  .filter((c) => c.label.trim())
                  .map((c) => (
                    <span
                      key={c.id}
                      className="inline-block rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-semibold px-2.5 py-0.5 border border-indigo-200"
                    >
                      {c.label}
                    </span>
                  ))}
              </div>
            </div>
          )}

          {/* Langues */}
          {langues.length > 0 && (
            <div className="mb-6">
              <SectionTitle>Langues</SectionTitle>
              <ul className="space-y-2">
                {langues.map((l) => (
                  <li key={l.id} className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-gray-700">{l.langue || "—"}</span>
                    <span className="text-[10px] text-indigo-600 font-medium bg-indigo-50 rounded px-1.5 py-0.5 border border-indigo-100">
                      {l.niveau || "—"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Formations */}
          {formations.length > 0 && (
            <div>
              <SectionTitle>Formations</SectionTitle>
              <ul className="space-y-4">
                {formations.map((f) => (
                  <li key={f.id}>
                    {f.diplome && (
                      <p className="text-[11px] font-bold text-gray-800 leading-snug">{f.diplome}</p>
                    )}
                    {f.ecole && (
                      <p className="text-[11px] text-indigo-600 font-medium">{f.ecole}</p>
                    )}
                    {f.periode && (
                      <p className="text-[10px] text-gray-400 mt-0.5">{f.periode}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Colonne droite */}
        <div className="col-span-2 px-7 py-6">
          {/* Résumé */}
          {resume && (
            <div className="mb-6">
              <SectionTitle>Profil</SectionTitle>
              <p className="text-[11.5px] text-gray-600 leading-relaxed">{resume}</p>
            </div>
          )}

          {/* Expériences */}
          {experiences.length > 0 && (
            <div>
              <SectionTitle>Expériences professionnelles</SectionTitle>
              <ul className="space-y-5">
                {experiences.map((exp) => (
                  <li key={exp.id} className="relative pl-4 border-l-2 border-indigo-200">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-indigo-500" />
                    <div className="flex items-start justify-between flex-wrap gap-1">
                      <div>
                        {exp.poste && (
                          <p className="text-[12px] font-bold text-gray-800 leading-tight">{exp.poste}</p>
                        )}
                        {exp.entreprise && (
                          <p className="text-[11px] text-indigo-600 font-semibold">{exp.entreprise}</p>
                        )}
                      </div>
                      {exp.periode && (
                        <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap bg-gray-100 px-2 py-0.5 rounded">
                          {exp.periode}
                        </span>
                      )}
                    </div>
                    {exp.description && (
                      <p className="mt-1 text-[11px] text-gray-600 leading-relaxed">{exp.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
