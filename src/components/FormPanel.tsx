import React from "react";
import type { CVData, Experience, Formation, Competence, Langue } from "../types";
import { uid } from "../utils";
import FormSection from "./FormSection";
import InputField from "./InputField";
import TextareaField from "./TextareaField";

interface Props {
  data: CVData;
  onChange: (data: CVData) => void;
}

export default function FormPanel({ data, onChange }: Props) {
  /* ---- helpers ---- */
  function setPersonal(key: keyof CVData["personal"], value: string) {
    onChange({ ...data, personal: { ...data.personal, [key]: value } });
  }

  /* ---- Experiences ---- */
  function addExp() {
    const entry: Experience = { id: uid(), poste: "", entreprise: "", periode: "", description: "" };
    onChange({ ...data, experiences: [...data.experiences, entry] });
  }
  function removeExp(id: string) {
    onChange({ ...data, experiences: data.experiences.filter((e) => e.id !== id) });
  }
  function setExp(id: string, key: keyof Experience, value: string) {
    onChange({
      ...data,
      experiences: data.experiences.map((e) => (e.id === id ? { ...e, [key]: value } : e)),
    });
  }

  /* ---- Formations ---- */
  function addForm() {
    const entry: Formation = { id: uid(), diplome: "", ecole: "", periode: "" };
    onChange({ ...data, formations: [...data.formations, entry] });
  }
  function removeForm(id: string) {
    onChange({ ...data, formations: data.formations.filter((f) => f.id !== id) });
  }
  function setForm(id: string, key: keyof Formation, value: string) {
    onChange({
      ...data,
      formations: data.formations.map((f) => (f.id === id ? { ...f, [key]: value } : f)),
    });
  }

  /* ---- Competences ---- */
  function addComp() {
    const entry: Competence = { id: uid(), label: "" };
    onChange({ ...data, competences: [...data.competences, entry] });
  }
  function removeComp(id: string) {
    onChange({ ...data, competences: data.competences.filter((c) => c.id !== id) });
  }
  function setComp(id: string, value: string) {
    onChange({
      ...data,
      competences: data.competences.map((c) => (c.id === id ? { ...c, label: value } : c)),
    });
  }

  /* ---- Langues ---- */
  function addLang() {
    const entry: Langue = { id: uid(), langue: "", niveau: "" };
    onChange({ ...data, langues: [...data.langues, entry] });
  }
  function removeLang(id: string) {
    onChange({ ...data, langues: data.langues.filter((l) => l.id !== id) });
  }
  function setLang(id: string, key: keyof Langue, value: string) {
    onChange({
      ...data,
      langues: data.langues.map((l) => (l.id === id ? { ...l, [key]: value } : l)),
    });
  }

  return (
    <div className="p-5 overflow-y-auto h-full">
      {/* Infos personnelles */}
      <FormSection title="Informations personnelles">
        <InputField label="Nom complet" value={data.personal.nom} onChange={(v) => setPersonal("nom", v)} placeholder="Prénom Nom" />
        <InputField label="Titre / Poste visé" value={data.personal.titre} onChange={(v) => setPersonal("titre", v)} placeholder="Développeur Full-Stack" />
        <div className="grid grid-cols-2 gap-2">
          <InputField label="E-mail" value={data.personal.email} onChange={(v) => setPersonal("email", v)} placeholder="vous@email.com" type="email" />
          <InputField label="Téléphone" value={data.personal.telephone} onChange={(v) => setPersonal("telephone", v)} placeholder="+33 6 00 00 00 00" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <InputField label="Ville" value={data.personal.ville} onChange={(v) => setPersonal("ville", v)} placeholder="Paris, France" />
          <InputField label="Site / LinkedIn" value={data.personal.site} onChange={(v) => setPersonal("site", v)} placeholder="linkedin.com/in/..." />
        </div>
      </FormSection>

      {/* Résumé */}
      <FormSection title="Résumé professionnel">
        <TextareaField
          label="Présentation"
          value={data.resume}
          onChange={(v) => onChange({ ...data, resume: v })}
          placeholder="Décrivez votre profil en 2-3 phrases..."
          rows={4}
        />
      </FormSection>

      {/* Expériences */}
      <FormSection title="Expériences">
        {data.experiences.map((exp, idx) => (
          <div key={exp.id} className="rounded-lg border border-gray-100 bg-gray-50 p-3 space-y-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-gray-500">Expérience {idx + 1}</span>
              <button
                onClick={() => removeExp(exp.id)}
                aria-label="Supprimer cette expérience"
                className="text-red-400 hover:text-red-600 text-xs font-medium transition"
              >
                Supprimer
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <InputField label="Poste" value={exp.poste} onChange={(v) => setExp(exp.id, "poste", v)} placeholder="Développeur Senior" />
              <InputField label="Entreprise" value={exp.entreprise} onChange={(v) => setExp(exp.id, "entreprise", v)} placeholder="Nom de la société" />
            </div>
            <InputField label="Période" value={exp.periode} onChange={(v) => setExp(exp.id, "periode", v)} placeholder="Jan 2020 – Présent" />
            <TextareaField label="Description" value={exp.description} onChange={(v) => setExp(exp.id, "description", v)} placeholder="Vos missions principales..." rows={2} />
          </div>
        ))}
        <button
          onClick={addExp}
          className="mt-1 w-full rounded-md border border-dashed border-indigo-300 py-2 text-xs font-medium text-indigo-500 hover:bg-indigo-50 transition"
        >
          + Ajouter une expérience
        </button>
      </FormSection>

      {/* Formations */}
      <FormSection title="Formations">
        {data.formations.map((form, idx) => (
          <div key={form.id} className="rounded-lg border border-gray-100 bg-gray-50 p-3 space-y-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-gray-500">Formation {idx + 1}</span>
              <button
                onClick={() => removeForm(form.id)}
                aria-label="Supprimer cette formation"
                className="text-red-400 hover:text-red-600 text-xs font-medium transition"
              >
                Supprimer
              </button>
            </div>
            <InputField label="Diplôme / Certification" value={form.diplome} onChange={(v) => setForm(form.id, "diplome", v)} placeholder="Master Informatique" />
            <div className="grid grid-cols-2 gap-2">
              <InputField label="École / Université" value={form.ecole} onChange={(v) => setForm(form.id, "ecole", v)} placeholder="Université Paris-Saclay" />
              <InputField label="Période" value={form.periode} onChange={(v) => setForm(form.id, "periode", v)} placeholder="2015 – 2017" />
            </div>
          </div>
        ))}
        <button
          onClick={addForm}
          className="mt-1 w-full rounded-md border border-dashed border-indigo-300 py-2 text-xs font-medium text-indigo-500 hover:bg-indigo-50 transition"
        >
          + Ajouter une formation
        </button>
      </FormSection>

      {/* Compétences */}
      <FormSection title="Compétences">
        <div className="flex flex-wrap gap-2">
          {data.competences.map((comp) => (
            <div key={comp.id} className="flex items-center gap-1 rounded-full bg-indigo-50 border border-indigo-200 pl-2 pr-1 py-0.5">
              <input
                type="text"
                value={comp.label}
                onChange={(e) => setComp(comp.id, e.target.value)}
                placeholder="Compétence"
                className="bg-transparent text-xs text-indigo-700 font-medium w-24 focus:outline-none"
              />
              <button
                onClick={() => removeComp(comp.id)}
                aria-label="Supprimer cette compétence"
                className="text-indigo-300 hover:text-red-400 font-bold text-sm leading-none transition"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={addComp}
          className="mt-2 w-full rounded-md border border-dashed border-indigo-300 py-2 text-xs font-medium text-indigo-500 hover:bg-indigo-50 transition"
        >
          + Ajouter une compétence
        </button>
      </FormSection>

      {/* Langues */}
      <FormSection title="Langues">
        {data.langues.map((lang, idx) => (
          <div key={lang.id} className="flex items-center gap-2">
            <span className="text-xs text-gray-400 w-4 shrink-0">{idx + 1}.</span>
            <input
              type="text"
              value={lang.langue}
              onChange={(e) => setLang(lang.id, "langue", e.target.value)}
              placeholder="Français"
              className="flex-1 rounded-md border border-gray-200 bg-white px-2 py-1.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition"
            />
            <input
              type="text"
              value={lang.niveau}
              onChange={(e) => setLang(lang.id, "niveau", e.target.value)}
              placeholder="Natif / C1"
              className="w-28 rounded-md border border-gray-200 bg-white px-2 py-1.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition"
            />
            <button
              onClick={() => removeLang(lang.id)}
              aria-label="Supprimer cette langue"
              className="text-red-300 hover:text-red-500 font-bold text-lg leading-none transition"
            >
              ×
            </button>
          </div>
        ))}
        <button
          onClick={addLang}
          className="mt-1 w-full rounded-md border border-dashed border-indigo-300 py-2 text-xs font-medium text-indigo-500 hover:bg-indigo-50 transition"
        >
          + Ajouter une langue
        </button>
      </FormSection>
    </div>
  );
}
