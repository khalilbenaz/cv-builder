import type { CVData } from "./types";
import { defaultData } from "./defaultData";
import { DEFAULT_TEMPLATE, TEMPLATES, type TemplateId } from "./templates";

const STORAGE_KEY = "cv_builder_data_v1";
const TEMPLATE_KEY = "cv_builder_template_v1";
const SETTINGS_KEY = "cv_builder_settings_v1";

export type IconStyle = "solid" | "outline" | "emoji" | "none";

export interface CVSettings {
  /** Couleur d'accent hex personnalisée ; undefined = couleur du thème */
  accent?: string;
  /** Style des icônes de contact dans le CV */
  iconStyle: IconStyle;
}

export const defaultSettings: CVSettings = { iconStyle: "solid" };

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

export function loadSettings(): CVSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return defaultSettings;
    const parsed = JSON.parse(raw) as Partial<CVSettings> & { showIcons?: boolean };
    // Migration : ancien booléen showIcons → iconStyle
    if (parsed.iconStyle === undefined && parsed.showIcons !== undefined) {
      parsed.iconStyle = parsed.showIcons ? "solid" : "none";
    }
    return { ...defaultSettings, ...parsed };
  } catch {
    return defaultSettings;
  }
}

export function saveSettings(settings: CVSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    // silently ignore storage quota errors
  }
}
