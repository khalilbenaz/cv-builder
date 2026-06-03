import React from "react";
import type { CVData } from "../types";

interface Props {
  data: CVData;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="w-6 h-px bg-amber-600" />
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-700">{children}</h2>
    </div>
  );
}

export default function ElegantTemplate({ data }: Props) {
  const { personal, resume, experiences, formations, competences, langues } = data;

  return (
    <div
      className="px-10 py-9 bg-[#fdfcf9]"
      style={{ fontFamily: "Georgia, 'Times New Roman', serif", minHeight: "842px" }}
    >
      {/* En-tête */}
      <div className="text-center mb-8">
        {personal.photo && (
          <img
            src={personal.photo}
            alt=""
            className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-amber-600 p-0.5"
          />
        )}
        <h1 className="text-[30px] tracking-[0.08em] text-gray-900 font-normal uppercase">
          {personal.nom || "Votre Nom"}
        </h1>
        <div className="w-16 h-px bg-amber-600 mx-auto my-3" />
        {personal.titre && (
          <p className="text-[12px] text-amber-800 tracking-[0.2em] uppercase">{personal.titre}</p>
        )}
        <p className="mt-3 text-[10.5px] text-gray-500 italic">
          {[personal.email, personal.telephone, personal.ville, personal.site]
            .filter(Boolean)
            .join("  ·  ")}
        </p>
      </div>

      {/* Profil */}
      {resume && (
        <div className="mb-7">
          <SectionTitle>Profil</SectionTitle>
          <p className="text-[11.5px] text-gray-700 leading-relaxed italic">{resume}</p>
        </div>
      )}

      {/* Expériences */}
      {experiences.length > 0 && (
        <div className="mb-7">
          <SectionTitle>Expériences</SectionTitle>
          <ul className="space-y-4">
            {experiences.map((exp) => (
              <li key={exp.id}>
                <div className="flex items-baseline justify-between flex-wrap gap-1">
                  <p className="text-[12.5px] font-semibold text-gray-900">{exp.poste}</p>
                  {exp.periode && (
                    <span className="text-[10px] text-amber-700 italic whitespace-nowrap">{exp.periode}</span>
                  )}
                </div>
                {exp.entreprise && (
                  <p className="text-[11px] text-gray-500 tracking-wide">{exp.entreprise}</p>
                )}
                {exp.description && (
                  <p className="mt-1 text-[11px] text-gray-700 leading-relaxed">{exp.description}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Formations */}
      {formations.length > 0 && (
        <div className="mb-7">
          <SectionTitle>Formations</SectionTitle>
          <ul className="space-y-2.5">
            {formations.map((f) => (
              <li key={f.id} className="flex items-baseline justify-between flex-wrap gap-1">
                <p className="text-[11.5px] text-gray-900">
                  <span className="font-semibold">{f.diplome}</span>
                  {f.ecole && <span className="text-gray-500"> — {f.ecole}</span>}
                </p>
                {f.periode && (
                  <span className="text-[10px] text-amber-700 italic whitespace-nowrap">{f.periode}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-2 gap-10">
        {competences.length > 0 && (
          <div>
            <SectionTitle>Compétences</SectionTitle>
            <p className="text-[11px] text-gray-700 leading-relaxed">
              {competences.filter((c) => c.label.trim()).map((c) => c.label).join("  ·  ")}
            </p>
          </div>
        )}
        {langues.length > 0 && (
          <div>
            <SectionTitle>Langues</SectionTitle>
            <ul className="space-y-1">
              {langues.map((l) => (
                <li key={l.id} className="text-[11px] text-gray-700">
                  <span className="font-semibold">{l.langue || "—"}</span>
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
