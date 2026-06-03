import React from "react";
import type { CVData } from "../types";
import { IconEmail, IconPhone, IconPin, IconLink } from "./icons";

interface Props {
  data: CVData;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-900 border-b-2 border-[color:var(--ac)] inline-block pb-1 mb-3">
      {children}
    </h2>
  );
}

export default function ProTemplate({ data }: Props) {
  const { personal, resume, experiences, formations, competences, langues } = data;

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", minHeight: "842px" }}>
      {/* Bande supérieure */}
      <div className="h-2.5 bg-[color:var(--ac)]" />
      <div className="px-9 py-7">
        {/* En-tête */}
        <div className="flex items-center justify-between gap-6 mb-7">
          <div>
            <h1 className="text-[26px] font-extrabold text-gray-900 leading-tight">
              {personal.nom || "Votre Nom"}
            </h1>
            {personal.titre && (
              <p className="text-[13px] text-[color:var(--ac-dark)] font-semibold mt-0.5">{personal.titre}</p>
            )}
            <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
              {personal.email && (
                <span className="flex items-center gap-1 text-[10px] text-gray-500">
                  <IconEmail />
                  {personal.email}
                </span>
              )}
              {personal.telephone && (
                <span className="flex items-center gap-1 text-[10px] text-gray-500">
                  <IconPhone />
                  {personal.telephone}
                </span>
              )}
              {personal.ville && (
                <span className="flex items-center gap-1 text-[10px] text-gray-500">
                  <IconPin />
                  {personal.ville}
                </span>
              )}
              {personal.site && (
                <span className="flex items-center gap-1 text-[10px] text-gray-500">
                  <IconLink />
                  {personal.site}
                </span>
              )}
            </div>
          </div>
          {personal.photo && (
            <img
              src={personal.photo}
              alt=""
              className="w-24 h-24 rounded-xl object-cover border-2 border-[color:var(--ac-border)] shrink-0"
            />
          )}
        </div>

        {/* Profil */}
        {resume && (
          <div className="mb-6">
            <SectionTitle>Profil</SectionTitle>
            <p className="text-[11.5px] text-gray-600 leading-relaxed">{resume}</p>
          </div>
        )}

        {/* Expériences */}
        {experiences.length > 0 && (
          <div className="mb-6">
            <SectionTitle>Expériences professionnelles</SectionTitle>
            <ul className="space-y-4">
              {experiences.map((exp) => (
                <li key={exp.id} className="grid grid-cols-[120px_1fr] gap-4">
                  <span className="text-[10px] text-[color:var(--ac-dark)] font-semibold pt-0.5">{exp.periode}</span>
                  <div>
                    <p className="text-[12px] font-bold text-gray-900 leading-tight">{exp.poste}</p>
                    {exp.entreprise && (
                      <p className="text-[11px] text-gray-500 font-medium">{exp.entreprise}</p>
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
          <div className="mb-6">
            <SectionTitle>Formations</SectionTitle>
            <ul className="space-y-2.5">
              {formations.map((f) => (
                <li key={f.id} className="grid grid-cols-[120px_1fr] gap-4">
                  <span className="text-[10px] text-[color:var(--ac-dark)] font-semibold pt-0.5">{f.periode}</span>
                  <div>
                    <p className="text-[11.5px] font-bold text-gray-900">{f.diplome}</p>
                    {f.ecole && <p className="text-[10.5px] text-gray-500">{f.ecole}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-2 gap-8">
          {competences.length > 0 && (
            <div>
              <SectionTitle>Compétences</SectionTitle>
              <div className="flex flex-wrap gap-1.5">
                {competences
                  .filter((c) => c.label.trim())
                  .map((c) => (
                    <span
                      key={c.id}
                      className="inline-block rounded bg-[color:var(--ac-bg)] text-[color:var(--ac-dark)] text-[10px] font-semibold px-2 py-0.5"
                    >
                      {c.label}
                    </span>
                  ))}
              </div>
            </div>
          )}
          {langues.length > 0 && (
            <div>
              <SectionTitle>Langues</SectionTitle>
              <ul className="space-y-1">
                {langues.map((l) => (
                  <li key={l.id} className="text-[11px] text-gray-700 flex justify-between max-w-[200px]">
                    <span className="font-semibold">{l.langue || "—"}</span>
                    <span className="text-[color:var(--ac-dark)]">{l.niveau || "—"}</span>
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
