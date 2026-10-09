import { Link } from "@tanstack/react-router";

export function DandelionMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const cos = Number(Math.cos(angle).toFixed(3));
        const sin = Number(Math.sin(angle).toFixed(3));
        const x1 = Number((12 + 3.4 * cos).toFixed(2));
        const y1 = Number((5.6 + 3.4 * sin).toFixed(2));
        const x2 = Number((12 + 6.6 * cos).toFixed(2));
        const y2 = Number((5.6 + 6.6 * sin).toFixed(2));
        return (
          <g key={i}>
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
            <circle
              cx={Number((x2 + 0.9 * cos).toFixed(2))}
              cy={Number((y2 + 0.9 * sin).toFixed(2))}
              r="0.85"
              fill="currentColor"
            />
          </g>
        );
      })}
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer id="contacts" className="border-t border-cream/10 bg-ink pb-10">
      <div className="mx-auto max-w-6xl px-6 pt-16 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <Link to="/" className="flex items-center gap-3 text-cream">
            <DandelionMark className="h-9 w-9 text-camel" />
            <span className="font-display text-3xl">Dandelion</span>
          </Link>
          <p className="max-w-md text-sm leading-relaxed text-cream/60">
            Концепт сайта туристического агентства, созданный как проект. Туры, цены,
            отзывы и формы на сайте используются только для демонстрации интерфейса.
          </p>
          <a href="#top" className="eyebrow text-camel transition-colors hover:text-cream">
            Наверх ↑
          </a>
        </div>
        <div className="seed-divider mt-12 opacity-60">
          <DandelionMark className="h-4 w-4" />
        </div>
        <p className="mt-6 text-center text-xs text-cream/40">
          © 2026 Dandelion · Travel website concept
        </p>
      </div>
    </footer>
  );
}
