import type { CVData } from "./types";
import { defaultData } from "./defaultData";
import { DEFAULT_TEMPLATE, TEMPLATES, type TemplateId } from "./templates";

const STORAGE_KEY = "cv_builder_data_v1";
const TEMPLATE_KEY = "cv_builder_template_v1";

export function loadCV(): CVData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultData;
    const parsed = JSON.parse(raw) as CVData;
    return parsed;
  } catch {
    return defaultData;
  }
}

export function saveCV(data: CVData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // silently ignore storage quota errors
  }
}

export function loadTemplate(): TemplateId {
  try {
    const raw = localStorage.getItem(TEMPLATE_KEY);
    if (raw && TEMPLATES.some((t) => t.id === raw)) return raw as TemplateId;
  } catch {
    // ignore
  }
  return DEFAULT_TEMPLATE;
}

export function saveTemplate(id: TemplateId): void {
  try {
    localStorage.setItem(TEMPLATE_KEY, id);
  } catch {
    // silently ignore storage quota errors
  }
}
