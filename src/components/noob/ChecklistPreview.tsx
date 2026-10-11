export function ChecklistPreview({ label, alt }: { label: string; alt: string }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className="mx-auto flex aspect-[1/1.414] w-full max-w-[16rem] flex-col gap-3 rounded-2xl bg-noob-cream p-6 shadow-md"
    >
      <div className="h-4 w-2/3 rounded bg-noob-navy/20" />
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm border border-noob-navy/30" />
          <span className="h-2.5 flex-1 rounded bg-noob-navy/10" />
        </div>
      ))}
      <div className="flex-1" />
      <span className="self-center rounded-full bg-noob-rosa px-3 py-1 text-xs font-semibold text-noob-navy">{label}</span>
    </div>
  );
}
