export function ChecklistPreview({ label, alt }: { label: string; alt: string }) {
  return (
    <div role="img" aria-label={alt} className="retro-card mx-auto flex aspect-[1/1.414] w-full max-w-[16rem] flex-col gap-3 bg-cream p-6">
      <div className="h-4 w-2/3 bg-grapefruit" />
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="h-4 w-4 border border-navy" />
          <span className="h-2.5 flex-1 bg-mid-sky" />
        </div>
      ))}
      <div className="flex-1" />
      <span className="retro-pill self-center bg-grapefruit">{label}</span>
    </div>
  );
}
