import React from "react";
import type { CVData } from "../types";
import type { CVSettings } from "../storage";
import { getTemplate, type TemplateId } from "../templates";
import { IconStyleContext } from "../templates/icons";
import { accentVars } from "../utils";

interface Props {
  data: CVData;
  template: TemplateId;
  settings: CVSettings;
  /** Variante impression : pas d'ombre ni d'arrondis */
  forPrint?: boolean;
}

export default function CVPreview({ data, template, settings, forPrint }: Props) {
  const meta = getTemplate(template);
  const Template = meta.component;
  const vars = accentVars(settings.accent ?? meta.accent);

  return (
    <div
      className={forPrint ? "bg-white" : "bg-white shadow-lg rounded-xl overflow-hidden"}
      style={vars as React.CSSProperties}
    >
      <IconStyleContext.Provider value={settings.iconStyle}>
        <Template data={data} />
      </IconStyleContext.Provider>
    </div>
  );
}
