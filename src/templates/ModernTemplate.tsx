import React from "react";
import type { CVData } from "../types";
import { IconEmail, IconPhone, IconPin, IconLink } from "./icons";

interface Props {
  data: CVData;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <h2 className="text-[11px] font-bold uppercase tracking-[0.15em] text-indigo-700">{children}</h2>
      <div className="flex-1 h-px bg-indigo-200" />
    </div>
  );
}

export default function ModernTemplate({ data }: Props) {
  const { personal, resume, experiences, formations, competences, langues } = data;

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", minHeight: "842px" }}>
      {/* En-tête */}
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-500 px-8 py-7 text-white flex items-center gap-6">
        {personal.photo && (
          <img
            src={personal.photo}
            alt=""
            className="w-20 h-20 rounded-full object-cover ring-4 ring-white/30 shrink-0"
          />
        )}
        <div className="flex-1">
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
