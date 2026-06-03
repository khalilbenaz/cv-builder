import React from "react";
import { TEMPLATES, type TemplateId } from "../templates";

interface Props {
  value: TemplateId;
  onChange: (id: TemplateId) => void;
}

export default function TemplatePicker({ value, onChange }: Props) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {TEMPLATES.map((t) => {
        const active = t.id === value;
        return (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            title={t.description}
            aria-pressed={active}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium border transition ${
              active
                ? "border-indigo-400 bg-indigo-50 text-indigo-700 shadow-sm"
                : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0 border border-black/10"
              style={{ backgroundColor: t.accent }}
            />
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
