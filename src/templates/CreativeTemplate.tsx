import React from "react";
import type { CVData } from "../types";
import { IconEmail, IconPhone, IconPin, IconLink } from "./icons";

interface Props {
  data: CVData;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="inline-block text-[11px] font-extrabold uppercase tracking-[0.12em] text-white bg-[image:linear-gradient(to_right,var(--ac),var(--ac-dark))] rounded-full px-3.5 py-1 mb-3">
      {children}
    </h2>
  );
}

export default function CreativeTemplate({ data }: Props) {
  const { personal, resume, experiences, formations, competences, langues } = data;

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", minHeight: "842px" }}>
      {/* En-tête diagonal */}
      <div className="relative bg-[image:linear-gradient(135deg,var(--ac),var(--ac-dark))] px-9 pt-8 pb-12 text-white overflow-hidden">
        <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-white/10" />
        <div className="absolute right-16 top-14 w-20 h-20 rounded-full bg-white/10" />
        <div className="flex items-center gap-5 relative">
          {personal.photo && (
            <img
              src={personal.photo}
              alt=""
              className="w-20 h-20 rounded-full object-cover ring-4 ring-white/40 shrink-0"
            />
          )}
          <div>
        <h1 className="text-[27px] font-extrabold tracking-tight leading-tight relative">
          {personal.nom || "Votre Nom"}
        </h1>
        {personal.titre && (
          <p className="text-white/80 text-[13px] font-semibold mt-1 relative">{personal.titre}</p>
        )}
        <div className="mt-3.5 flex flex-wrap gap-x-5 gap-y-1.5 relative">
          {personal.email && (
            <span className="flex items-center gap-1.5 text-[10.5px] text-white/85">
              <IconEmail />
              {personal.email}
            </span>
          )}
          {personal.telephone && (
            <span className="flex items-center gap-1.5 text-[10.5px] text-white/85">
              <IconPhone />
              {personal.telephone}
            </span>
          )}
          {personal.ville && (
            <span className="flex items-center gap-1.5 text-[10.5px] text-white/85">
              <IconPin />
              {personal.ville}
            </span>
          )}
          {personal.site && (
            <span className="flex items-center gap-1.5 text-[10.5px] text-white/85">
              <IconLink />
              {personal.site}
            </span>
          )}
        </div>
          </div>
        </div>
      </div>

      <div className="px-9 py-7 -mt-5 relative">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 px-7 py-6">
          {/* Profil */}
          {resume && (
            <div className="mb-6">
              <SectionTitle>Profil</SectionTitle>
              <p className="text-[11.5px] text-gray-600 leading-relaxed">{resume}</p>
            </div>
          )}

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
                      className="inline-block rounded-full bg-[color:var(--ac-bg)] text-[color:var(--ac-dark)] text-[10px] font-semibold px-2.5 py-0.5 border border-[color:var(--ac-border)]"
                    >
                      {c.label}
                    </span>
                  ))}
              </div>
            </div>
          )}

          {/* Expériences */}
          {experiences.length > 0 && (
            <div className="mb-6">
              <SectionTitle>Expériences</SectionTitle>
              <ul className="space-y-4.5 mt-1 space-y-5">
                {experiences.map((exp) => (
                  <li key={exp.id} className="relative pl-5">
                    <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-[color:var(--ac)]" />
                    <div className="flex items-start justify-between flex-wrap gap-1">
                      <div>
                        <p className="text-[12px] font-bold text-gray-800 leading-tight">{exp.poste}</p>
                        {exp.entreprise && (
                          <p className="text-[11px] text-[color:var(--ac)] font-semibold">{exp.entreprise}</p>
                        )}
                      </div>
                      {exp.periode && (
                        <span className="text-[10px] text-[color:var(--ac)] font-semibold whitespace-nowrap bg-[color:var(--ac-bg)] px-2 py-0.5 rounded-full">
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

          <div className="grid grid-cols-2 gap-8">
            {/* Formations */}
            {formations.length > 0 && (
              <div>
                <SectionTitle>Formations</SectionTitle>
                <ul className="space-y-3">
                  {formations.map((f) => (
                    <li key={f.id}>
                      <p className="text-[11px] font-bold text-gray-800 leading-snug">{f.diplome}</p>
                      <p className="text-[10.5px] text-[color:var(--ac)] font-medium">{f.ecole}</p>
                      {f.periode && <p className="text-[10px] text-gray-400">{f.periode}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Langues */}
            {langues.length > 0 && (
              <div>
                <SectionTitle>Langues</SectionTitle>
                <ul className="space-y-2">
                  {langues.map((l) => (
                    <li key={l.id} className="flex items-center justify-between max-w-[200px]">
                      <span className="text-[11px] font-semibold text-gray-700">{l.langue || "—"}</span>
                      <span className="text-[10px] text-[color:var(--ac)] font-medium bg-[color:var(--ac-bg)] rounded-full px-2 py-0.5 border border-[color:var(--ac-border)]">
                        {l.niveau || "—"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
