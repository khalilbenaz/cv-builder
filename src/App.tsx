import React, { useEffect, useRef, useState } from "react";
import type { CVData } from "./types";
import { loadCV, saveCV, loadTemplate, saveTemplate } from "./storage";
import { defaultData } from "./defaultData";
import type { TemplateId } from "./templates";
import FormPanel from "./components/FormPanel";
import CVPreview from "./components/CVPreview";
import TemplatePicker from "./components/TemplatePicker";

/* Injecte les styles d'impression une seule fois dans le <head> */
const PRINT_STYLE = `
@media print {
  body * { visibility: hidden !important; }
  #cv-preview, #cv-preview * { visibility: visible !important; }
  #cv-preview {
    position: fixed !important;
    inset: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    margin: 0 !important;
    padding: 0 !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    overflow: visible !important;
  }
  @page { margin: 0; size: A4 portrait; }
}
`;

function useInjectPrintStyle() {
  const injected = useRef(false);
  useEffect(() => {
    if (injected.current) return;
    injected.current = true;
    const style = document.createElement("style");
    style.textContent = PRINT_STYLE;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
}

export default function App() {
  useInjectPrintStyle();

  const [data, setData] = useState<CVData>(() => loadCV());
  const [template, setTemplate] = useState<TemplateId>(() => loadTemplate());
  const [saved, setSaved] = useState(false);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Auto-sauvegarde avec debounce 600ms */
  useEffect(() => {
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      saveCV(data);
      setSaved(true);
      setTimeout(() => setSaved(false), 1800);
    }, 600);
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, [data]);

  function handleTemplateChange(id: TemplateId) {
    setTemplate(id);
    saveTemplate(id);
  }

  function handleReset() {
    if (window.confirm("Effacer toutes les données et repartir avec les données d'exemple ?")) {
      setData(defaultData);
    }
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-50 flex flex-col">
      {/* Barre de navigation */}
      <header className="print:hidden bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            {/* Logo SVG inline */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-indigo-600">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span className="font-bold text-slate-800 text-base tracking-tight">CV Builder</span>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-medium transition-opacity duration-300 ${saved ? "opacity-100 text-emerald-600" : "opacity-0"}`}
              aria-live="polite"
            >
              Sauvegardé
            </span>

            <button
              onClick={handleReset}
              className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition"
            >
              Réinitialiser
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 rounded-md bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700 active:scale-95 transition shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a1 1 0 001 1h8a1 1 0 001-1v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a1 1 0 00-1-1H6a1 1 0 00-1 1zm2 0h6v3H7V4zm-1 9a1 1 0 110-2 1 1 0 010 2zm2 2v-3h4v3H8z" clipRule="evenodd" />
              </svg>
              Imprimer / PDF
            </button>
          </div>
        </div>
      </header>

      {/* Contenu principal : 2 colonnes */}
      <main className="print:hidden flex-1 max-w-screen-2xl mx-auto w-full px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Formulaire */}
        <div className="bg-white rounded-2xl shadow border border-slate-100 overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-100 px-5 py-3">
            <h2 className="text-sm font-semibold text-slate-700">Informations du CV</h2>
            <p className="text-xs text-slate-400 mt-0.5">Modifiez les champs — la sauvegarde est automatique.</p>
          </div>
          <FormPanel data={data} onChange={setData} />
        </div>

        {/* Aperçu */}
        <div className="sticky top-20">
          <div className="bg-slate-50 border border-slate-100 rounded-t-2xl px-5 py-3 flex items-center justify-between gap-3 flex-wrap shadow-sm">
            <h2 className="text-sm font-semibold text-slate-700 shrink-0">Aperçu du CV</h2>
            <TemplatePicker value={template} onChange={handleTemplateChange} />
          </div>
          <div className="overflow-hidden rounded-b-2xl border border-t-0 border-slate-100 shadow-lg p-4 bg-white">
            <CVPreview data={data} template={template} />
          </div>
        </div>
      </main>

      {/* Zone d'impression : affiche le CV en pleine page via CSS @media print (voir PRINT_STYLE) */}
      {/* Le #cv-preview dans le main est ciblé directement par @media print */}
    </div>
  );
}
