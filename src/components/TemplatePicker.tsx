import React from "react";
import { TEMPLATES, type TemplateId } from "../templates";
import type { CVSettings } from "../storage";

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
  return (
    <div className="space-y-3">
      {/* Liste des modèles */}
      <div>
        <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1.5">Modèle</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
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
          <button
            onClick={() => onSettingsChange({ ...settings, showIcons: !settings.showIcons })}
            role="switch"
            aria-checked={settings.showIcons}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
              settings.showIcons ? "bg-indigo-600" : "bg-slate-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition ${
                settings.showIcons ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
