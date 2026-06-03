import React from "react";
import type { CVData } from "../types";
import { IconEmail, IconPhone, IconPin, IconLink } from "./icons";

interface Props {
  data: CVData;
}

function SidebarTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-300 border-b border-slate-600 pb-1.5 mb-3">
      {children}
    </h2>
  );
}

function MainTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <h2 className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-800">{children}</h2>
      <div className="flex-1 h-px bg-teal-500/40" />
    </div>
  );
}

export default function SidebarTemplate({ data }: Props) {
  const { personal, resume, experiences, formations, competences, langues } = data;

  return (
    <div className="grid grid-cols-3" style={{ fontFamily: "'Inter', system-ui, sans-serif", minHeight: "842px" }}>
      {/* Sidebar sombre */}
      <div className="col-span-1 bg-slate-800 text-slate-100 px-5 py-8">
        {personal.photo && (
          <img
            src={personal.photo}
            alt=""
            className="w-24 h-24 rounded-full object-cover mx-auto mb-4 ring-4 ring-teal-400/40"
          />
        )}
        <h1 className="text-xl font-bold leading-tight text-white">
          {personal.nom || "Votre Nom"}
        </h1>
        {personal.titre && (
          <p className="text-teal-300 text-[11px] font-medium mt-1 mb-5">{personal.titre}</p>
        )}

        {/* Contact */}
        <div className="space-y-2 mb-7">
          {personal.email && (
            <p className="flex items-center gap-2 text-[10px] text-slate-300 break-all">
              <IconEmail />
              {personal.email}
            </p>
          )}
          {personal.telephone && (
            <p className="flex items-center gap-2 text-[10px] text-slate-300">
              <IconPhone />
              {personal.telephone}
            </p>
          )}
          {personal.ville && (
            <p className="flex items-center gap-2 text-[10px] text-slate-300">
              <IconPin />
              {personal.ville}
            </p>
          )}
          {personal.site && (
            <p className="flex items-center gap-2 text-[10px] text-slate-300 break-all">
              <IconLink />
              {personal.site}
            </p>
          )}
        </div>

        {/* Compétences */}
        {competences.length > 0 && (
          <div className="mb-7">
            <SidebarTitle>Compétences</SidebarTitle>
            <ul className="space-y-1.5">
              {competences
                .filter((c) => c.label.trim())
                .map((c) => (
                  <li key={c.id} className="text-[10.5px] text-slate-200 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-teal-400 shrink-0" />
                    {c.label}
                  </li>
                ))}
            </ul>
          </div>
        )}

        {/* Langues */}
        {langues.length > 0 && (
          <div>
            <SidebarTitle>Langues</SidebarTitle>
            <ul className="space-y-2">
              {langues.map((l) => (
                <li key={l.id}>
                  <p className="text-[10.5px] font-semibold text-slate-200">{l.langue || "—"}</p>
                  <p className="text-[9.5px] text-teal-300">{l.niveau || "—"}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Colonne principale */}
      <div className="col-span-2 bg-white px-7 py-8">
        {/* Profil */}
        {resume && (
          <div className="mb-6">
            <MainTitle>Profil</MainTitle>
            <p className="text-[11.5px] text-gray-600 leading-relaxed">{resume}</p>
          </div>
        )}

        {/* Expériences */}
        {experiences.length > 0 && (
          <div className="mb-6">
            <MainTitle>Expériences professionnelles</MainTitle>
            <ul className="space-y-5">
              {experiences.map((exp) => (
                <li key={exp.id}>
                  <div className="flex items-start justify-between flex-wrap gap-1">
                    <div>
                      {exp.poste && (
                        <p className="text-[12px] font-bold text-slate-800 leading-tight">{exp.poste}</p>
                      )}
                      {exp.entreprise && (
                        <p className="text-[11px] text-teal-600 font-semibold">{exp.entreprise}</p>
                      )}
                    </div>
                    {exp.periode && (
                      <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap bg-slate-100 px-2 py-0.5 rounded">
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

        {/* Formations */}
        {formations.length > 0 && (
          <div>
            <MainTitle>Formations</MainTitle>
            <ul className="space-y-3.5">
              {formations.map((f) => (
                <li key={f.id} className="flex items-start justify-between flex-wrap gap-1">
                  <div>
                    {f.diplome && (
                      <p className="text-[11.5px] font-bold text-slate-800 leading-snug">{f.diplome}</p>
                    )}
                    {f.ecole && <p className="text-[11px] text-teal-600 font-medium">{f.ecole}</p>}
                  </div>
                  {f.periode && (
                    <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap bg-slate-100 px-2 py-0.5 rounded">
                      {f.periode}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
