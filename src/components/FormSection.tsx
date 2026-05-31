import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function FormSection({ title, children }: Props) {
  return (
    <section className="mb-6">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3 border-b border-indigo-100 pb-1">
        {title}
      </h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}
