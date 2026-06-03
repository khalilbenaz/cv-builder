import React from "react";
import type { CVData } from "../types";

interface Props {
  data: CVData;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[11px] font-bold text-emerald-600 mb-3 font-mono">
      <span className="text-gray-400">## </span>
      {children}
    </h2>
  );
}

export default function TechTemplate({ data }: Props) {
  const { personal, resume, experiences, formations, competences, langues } = data;

  return (
    <div
      className="px-9 py-8 bg-white"
      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace", minHeight: "842px" }}
    >
      {/* En-tête style terminal */}
      <div className="rounded-lg border border-gray-200 bg-gray-900 px-6 py-5 mb-7">
        <div className="flex gap-1.5 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-4">
          {personal.photo && (
            <img
              src={personal.photo}
              alt=""
              className="w-16 h-16 rounded-lg object-cover border-2 border-emerald-500/50 shrink-0"
            />
          )}
          <div className="min-w-0">
        <h1 className="text-xl font-bold text-emerald-400">
          <span className="text-gray-500">$ </span>
          {personal.nom || "Votre Nom"}
        </h1>
        {personal.titre && (
          <p className="text-[12px] text-gray-300 mt-1">
            <span className="text-gray-600">&gt; </span>
            {personal.titre}
          </p>
        )}
        <p className="mt-2.5 text-[10px] text-gray-400 leading-relaxed">
          {[personal.email, personal.telephone, personal.ville, personal.site]
            .filter(Boolean)
            .map((v, i) => (
              <span key={i}>
                <span className="text-emerald-500">--</span>
                {v}{"  "}
              </span>
            ))}
        </p>
          </div>
        </div>
      </div>

      {/* Profil */}
      {resume && (
        <div className="mb-6">
          <SectionTitle>profil</SectionTitle>
          <p className="text-[11px] text-gray-600 leading-relaxed">{resume}</p>
        </div>
      )}

      {/* Compétences */}
      {competences.length > 0 && (
        <div className="mb-6">
          <SectionTitle>stack</SectionTitle>
          <div className="flex flex-wrap gap-1.5">
            {competences
              .filter((c) => c.label.trim())
              .map((c) => (
                <span
                  key={c.id}
                  className="inline-block rounded bg-gray-100 text-gray-700 text-[10px] px-2 py-0.5 border border-gray-200"
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
          <SectionTitle>expériences</SectionTitle>
          <ul className="space-y-4">
            {experiences.map((exp) => (
              <li key={exp.id} className="border-l-2 border-emerald-500/40 pl-4">
                <div className="flex items-baseline justify-between flex-wrap gap-1">
                  <p className="text-[11.5px] font-bold text-gray-900">{exp.poste}</p>
                  {exp.periode && (
                    <span className="text-[9.5px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded whitespace-nowrap">
                      {exp.periode}
                    </span>
                  )}
                </div>
                {exp.entreprise && (
                  <p className="text-[10.5px] text-gray-500">@ {exp.entreprise}</p>
                )}
                {exp.description && (
                  <p className="mt-1 text-[10.5px] text-gray-600 leading-relaxed">{exp.description}</p>
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
            <SectionTitle>formations</SectionTitle>
            <ul className="space-y-2.5">
              {formations.map((f) => (
                <li key={f.id}>
                  <p className="text-[10.5px] font-bold text-gray-900">{f.diplome}</p>
                  <p className="text-[10px] text-gray-500">
                    {f.ecole}
                    {f.periode && <span className="text-emerald-700"> · {f.periode}</span>}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Langues */}
        {langues.length > 0 && (
          <div>
            <SectionTitle>langues</SectionTitle>
            <ul className="space-y-1.5">
              {langues.map((l) => (
                <li key={l.id} className="text-[10.5px] text-gray-700">
                  <span className="font-bold">{l.langue || "—"}</span>
                  <span className="text-gray-400"> : </span>
                  <span className="text-emerald-700">{l.niveau || "—"}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
