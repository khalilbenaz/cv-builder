import type { CVData } from "./types";
import { defaultData } from "./defaultData";

const STORAGE_KEY = "cv_builder_data_v1";

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
