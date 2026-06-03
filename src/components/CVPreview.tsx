import React from "react";
import type { CVData } from "../types";
import { getTemplate, type TemplateId } from "../templates";

interface Props {
  data: CVData;
  template: TemplateId;
  /** Variante impression : pas d'ombre ni d'arrondis */
  forPrint?: boolean;
}

export default function CVPreview({ data, template, forPrint }: Props) {
  const Template = getTemplate(template).component;

  return (
    <div className={forPrint ? "bg-white" : "bg-white shadow-lg rounded-xl overflow-hidden"}>
      <Template data={data} />
    </div>
  );
}
