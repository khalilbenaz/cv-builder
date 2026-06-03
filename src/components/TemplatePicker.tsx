import React, { useState } from "react";
import { TEMPLATES, getTemplate, type TemplateId } from "../templates";
import type { CVSettings, IconStyle } from "../storage";

interface Props {
  template: TemplateId;
  onTemplateChange: (id: TemplateId) => void;
  settings: CVSettings;
  onSettingsChange: (s: CVSettings) => void;
}

/** Palette de couleurs d'accent proposées */
const ACCENT_PRESETS = [
  "#4f46e5", // indigo
  "#1d4ed8", // bleu
  "#0284c7", // ciel
  "#0f766e", // teal
  "#059669", // émeraude
  "#b45309", // ambre
  "#dc2626", // rouge
  "#c026d3", // fuchsia
  "#7c3aed", // violet
  "#334155", // ardoise
  "#000000", // noir
];

export default function TemplatePicker({ template, onTemplateChange, settings, onSettingsChange }: Props) {
  const [expanded, setExpanded] = useState(false);
  const current = getTemplate(template);

  return (
    <div className="space-y-3">
      {/* Liste des modèles (repliable) */}
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="w-full flex items-center justify-between gap-2 group"
        >
          <span className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Modèle</span>
            <span className="flex items-center gap-1.5 rounded-md bg-indigo-50 border border-indigo-200 px-2 py-0.5 text-xs font-medium text-indigo-700">
              <span
                className="w-2 h-2 rounded-full shrink-0 border border-black/10"
                style={{ backgroundColor: current.accent }}
              />
              {current.label}
            </span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-transform ${expanded ? "rotate-180" : ""}`}
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <div className={`grid grid-cols-2 sm:grid-cols-3 gap-1.5 mt-1.5 ${expanded ? "" : "hidden"}`}>
          {TEMPLATES.map((t) => {
            const active = t.id === template;
            return (
              <button
                key={t.id}
                onClick={() => onTemplateChange(t.id)}
                title={t.description}
                aria-pressed={active}
                className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs font-medium border text-left transition ${
                  active
                    ? "border-indigo-400 bg-indigo-50 text-indigo-700 shadow-sm"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0 border border-black/10"
                  style={{ backgroundColor: t.accent }}
                />
                <span className="truncate">
                  {t.label}
                  <span className="block text-[9.5px] font-normal text-slate-400 truncate">{t.description}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Couleur + icônes */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1.5">Couleur</p>
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Auto = couleur du thème */}
            <button
              onClick={() => onSettingsChange({ ...settings, accent: undefined })}
              title="Couleur par défaut du modèle"
              aria-pressed={!settings.accent}
              className={`h-6 px-2 rounded-full text-[10px] font-semibold border transition ${
                !settings.accent
                  ? "border-indigo-400 bg-indigo-50 text-indigo-700"
                  : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
              }`}
            >
              Auto
            </button>
            {ACCENT_PRESETS.map((c) => (
              <button
                key={c}
                onClick={() => onSettingsChange({ ...settings, accent: c })}
                title={c}
                aria-pressed={settings.accent === c}
                className={`w-6 h-6 rounded-full border-2 transition ${
                  settings.accent === c ? "border-indigo-500 scale-110" : "border-white shadow ring-1 ring-black/10"
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
            {/* Couleur libre */}
            <label
              className="w-6 h-6 rounded-full border-2 border-white shadow ring-1 ring-black/10 cursor-pointer overflow-hidden relative"
              title="Couleur personnalisée"
              style={{
                background: "conic-gradient(red, yellow, lime, cyan, blue, magenta, red)",
              }}
            >
              <input
                type="color"
                value={settings.accent ?? "#4f46e5"}
                onChange={(e) => onSettingsChange({ ...settings, accent: e.target.value })}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </label>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1.5">Icônes</p>
          <div className="inline-flex rounded-md border border-slate-200 bg-white overflow-hidden">
            {(
              [
                { id: "solid", label: "Plein" },
                { id: "outline", label: "Contour" },
                { id: "emoji", label: "Emoji" },
                { id: "none", label: "Aucune" },
              ] as { id: IconStyle; label: string }[]
            ).map((opt, i) => (
              <button
                key={opt.id}
                onClick={() => onSettingsChange({ ...settings, iconStyle: opt.id })}
                aria-pressed={settings.iconStyle === opt.id}
                className={`px-2.5 py-1 text-[11px] font-medium transition ${i > 0 ? "border-l border-slate-200" : ""} ${
                  settings.iconStyle === opt.id
                    ? "bg-indigo-600 text-white"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
