import React from "react";
import type { CVData } from "../types";
import { getTemplate, type TemplateId } from "../templates";

interface Props {
  data: CVData;
  template: TemplateId;
}

export default function CVPreview({ data, template }: Props) {
  const Template = getTemplate(template).component;

  return (
    <div id="cv-preview" className="bg-white shadow-lg rounded-xl overflow-hidden">
      <Template data={data} />
    </div>
  );
}
