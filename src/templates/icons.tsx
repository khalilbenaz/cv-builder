import React, { createContext, useContext } from "react";

export type IconStyle = "solid" | "outline" | "emoji" | "none";

export const IconStyleContext = createContext<IconStyle>("solid");

const SOLID_CLS = "cv-icon w-3.5 h-3.5 shrink-0";
const OUTLINE_CLS = "cv-icon w-3.5 h-3.5 shrink-0";
const EMOJI_CLS = "cv-icon text-[10px] leading-none shrink-0";

function Solid({ children }: { children: React.ReactNode }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={SOLID_CLS}>
      {children}
    </svg>
  );
}

function Outline({ children }: { children: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={OUTLINE_CLS}
    >
      {children}
    </svg>
  );
}

function Emoji({ children }: { children: string }) {
  return <span className={EMOJI_CLS} aria-hidden="true">{children}</span>;
}

export function IconEmail() {
  const style = useContext(IconStyleContext);
  if (style === "none") return null;
  if (style === "emoji") return <Emoji>✉️</Emoji>;
  if (style === "outline")
    return (
      <Outline>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </Outline>
    );
  return (
    <Solid>
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </Solid>
  );
}

export function IconPhone() {
  const style = useContext(IconStyleContext);
  if (style === "none") return null;
  if (style === "emoji") return <Emoji>📞</Emoji>;
  if (style === "outline")
    return (
      <Outline>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </Outline>
    );
  return (
    <Solid>
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </Solid>
  );
}

export function IconPin() {
  const style = useContext(IconStyleContext);
  if (style === "none") return null;
  if (style === "emoji") return <Emoji>📍</Emoji>;
  if (style === "outline")
    return (
      <Outline>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </Outline>
    );
  return (
    <Solid>
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </Solid>
  );
}

export function IconLink() {
  const style = useContext(IconStyleContext);
  if (style === "none") return null;
  if (style === "emoji") return <Emoji>🔗</Emoji>;
  if (style === "outline")
    return (
      <Outline>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </Outline>
    );
  return (
    <Solid>
      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
    </Solid>
  );
}
