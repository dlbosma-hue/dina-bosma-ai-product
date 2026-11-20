export function Ticker({ items }: { items: string[] }) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y-2 border-navy bg-rosa py-4 text-navy" aria-label={items.join(", ")}>
      <div className="club-ticker-track flex" aria-hidden>
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((it, i) => (
              <span key={i} className="flex items-center whitespace-nowrap">
                <span className="club-eyebrow px-6 text-sm text-navy">{it}</span>
                <span className="h-2 w-2 rounded-full bg-terra" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
