import type { ComponentType } from "react";
import type { CVData } from "../types";
import ModernTemplate from "./ModernTemplate";
import ClassicTemplate from "./ClassicTemplate";
import MinimalTemplate from "./MinimalTemplate";
import SidebarTemplate from "./SidebarTemplate";
import ElegantTemplate from "./ElegantTemplate";
import TechTemplate from "./TechTemplate";
import CreativeTemplate from "./CreativeTemplate";
import CompactTemplate from "./CompactTemplate";
import ProTemplate from "./ProTemplate";
import AtsTemplate from "./AtsTemplate";

export type TemplateId =
  | "modern"
  | "classic"
  | "minimal"
  | "sidebar"
  | "elegant"
  | "tech"
  | "creative"
  | "compact"
  | "pro"
  | "ats";

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
  {
    id: "elegant",
    label: "Élégant",
    description: "Serif raffiné, accents dorés",
    accent: "#b45309",
    component: ElegantTemplate,
  },
  {
    id: "tech",
    label: "Tech",
    description: "Style terminal, monospace",
    accent: "#059669",
    component: TechTemplate,
  },
  {
    id: "creative",
    label: "Créatif",
    description: "Dégradés vifs, formes arrondies",
    accent: "#c026d3",
    component: CreativeTemplate,
  },
  {
    id: "compact",
    label: "Compact",
    description: "Dense, efficace, accent bleu",
    accent: "#0284c7",
    component: CompactTemplate,
  },
  {
    id: "pro",
    label: "Pro",
    description: "Exécutif, bande colorée, dates en colonne",
    accent: "#1d4ed8",
    component: ProTemplate,
  },
  {
    id: "ats",
    label: "ATS",
    description: "Noir & blanc, une colonne, optimisé parseurs",
    accent: "#000000",
    component: AtsTemplate,
  },
];

export const DEFAULT_TEMPLATE: TemplateId = "modern";

export function getTemplate(id: TemplateId): TemplateMeta {
  return TEMPLATES.find((t) => t.id === id) ?? TEMPLATES[0];
}
