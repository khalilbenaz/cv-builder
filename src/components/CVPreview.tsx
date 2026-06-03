import React from "react";
import type { CVData } from "../types";
import type { CVSettings } from "../storage";
import { getTemplate, type TemplateId } from "../templates";
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
      className={`${forPrint ? "bg-white" : "bg-white shadow-lg rounded-xl overflow-hidden"}${settings.showIcons ? "" : " cv-noicons"}`}
      style={vars as React.CSSProperties}
    >
      <Template data={data} />
    </div>
  );
}
