import React, { useRef } from "react";

interface Props {
  value?: string;
  onChange: (dataUrl: string | undefined) => void;
}

/** Redimensionne + recadre l'image en carré 256px, retourne une data URL JPEG */
function processImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Lecture impossible"));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("Image invalide"));
      img.onload = () => {
        const SIZE = 256;
        const canvas = document.createElement("canvas");
        canvas.width = SIZE;
        canvas.height = SIZE;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas indisponible"));
        // Recadrage centré (cover)
        const side = Math.min(img.width, img.height);
        const sx = (img.width - side) / 2;
        const sy = (img.height - side) / 2;
        ctx.drawImage(img, sx, sy, side, side, 0, 0, SIZE, SIZE);
        resolve(canvas.toDataURL("image/jpeg", 0.85));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

export default function PhotoField({ value, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      onChange(await processImage(file));
    } catch {
      // image illisible : on ignore
    }
    e.target.value = "";
  }

  return (
    <div className="flex items-center gap-3">
      {value ? (
        <img
          src={value}
          alt="Photo de profil"
          className="w-16 h-16 rounded-full object-cover border-2 border-indigo-200 shadow-sm"
        />
      ) : (
        <div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      )}
      <div className="flex flex-col gap-1.5">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="rounded-md border border-indigo-300 bg-white px-3 py-1 text-xs font-medium text-indigo-600 hover:bg-indigo-50 transition"
        >
          {value ? "Changer la photo" : "Ajouter une photo"}
        </button>
        {value && (
          <button
            type="button"
            onClick={() => onChange(undefined)}
            className="rounded-md px-3 py-1 text-xs font-medium text-red-400 hover:text-red-600 transition text-left"
          >
            Supprimer
          </button>
        )}
      </div>
      <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
    </div>
  );
}
