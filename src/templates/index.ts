import type { ComponentType } from "react";
import type { CVData } from "../types";
import ModernTemplate from "./ModernTemplate";
import ClassicTemplate from "./ClassicTemplate";
import MinimalTemplate from "./MinimalTemplate";
import SidebarTemplate from "./SidebarTemplate";

export type TemplateId = "modern" | "classic" | "minimal" | "sidebar";

export interface TemplateMeta {
  id: TemplateId;
  label: string;
  description: string;
  /** Couleur d'accent utilisée pour la vignette du sélecteur */
  accent: string;
  component: ComponentType<{ data: CVData }>;
}

export const TEMPLATES: TemplateMeta[] = [
  {
    id: "modern",
    label: "Moderne",
    description: "En-tête coloré, deux colonnes",
    accent: "#4f46e5",
    component: ModernTemplate,
  },
  {
    id: "classic",
    label: "Classique",
    description: "Sobre, serif, une colonne",
    accent: "#1f2937",
    component: ClassicTemplate,
  },
  {
    id: "minimal",
    label: "Minimal",
    description: "Épuré, typographie légère",
    accent: "#9ca3af",
    component: MinimalTemplate,
  },
  {
    id: "sidebar",
    label: "Sidebar",
    description: "Barre latérale sombre, accent teal",
    accent: "#0f766e",
    component: SidebarTemplate,
  },
];

export const DEFAULT_TEMPLATE: TemplateId = "modern";

export function getTemplate(id: TemplateId): TemplateMeta {
  return TEMPLATES.find((t) => t.id === id) ?? TEMPLATES[0];
}
