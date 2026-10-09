import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TOURS } from "@/lib/tours";

export function TourCatalog({ tours, reset }: { tours: Array<(typeof TOURS)[number]>; reset: () => void }) {
  return (
    <section id="tours" className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
      <div className="mb-12 text-center"><p className="eyebrow mb-4 text-gold">Готовые путешествия</p><h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">Выбирайте настроение</h2><p className="mx-auto mt-4 max-w-xl text-muted-foreground">Все цены и программы в этом проекте демонстрационные.</p></div>
      {tours.length ? (
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => {
            const cardContent = (
              <>
                <div className="relative overflow-hidden rounded-md">
                  <img
                    src={tour.image}
                    alt={`${tour.country}: ${tour.title}`}
                    width={1200}
                    height={912}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="eyebrow absolute left-4 top-4 rounded-sm bg-cream/90 px-3 py-2 text-foreground backdrop-blur-sm">
                    {tour.tag}
                  </span>
                </div>

                <div className="border-b border-sand py-5 transition-colors group-hover:border-gold/50">
                  <div className="flex items-center justify-between gap-3">
                    <p className="eyebrow text-gold">{tour.country}</p>
                    <p className="text-xs text-muted-foreground">{tour.month} 2026</p>
                  </div>
                  <h3 className="font-display mt-2 text-2xl">{tour.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4" />
                      {tour.days}
                    </span>
                    <span>{tour.hotel}</span>
                  </div>
                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div>
                      <span className="text-xs text-muted-foreground">от</span>
                      <p className="font-display text-2xl">
                        ${tour.price.toLocaleString("en-US")} {" "}
                        <span className="font-[family-name:var(--font-body)] text-xs text-muted-foreground">
                          /чел.
                        </span>
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 px-2 text-sm font-medium text-gold transition-transform group-hover:translate-x-1">
                      Подробнее <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </>
            );

            return tour.slug === "kenya" ? (
              <Link
                key={tour.slug}
                to="/tours/kenya"
                className="group block rounded-md outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4"
                aria-label={`Открыть тур: ${tour.country} — ${tour.title}`}
              >
                {cardContent}
              </Link>
            ) : (
              <Link
                key={tour.slug}
                to="/tours/$slug"
                params={{ slug: tour.slug }}
                className="group block rounded-md outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4"
                aria-label={`Открыть тур: ${tour.country} — ${tour.title}`}
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="border-y border-sand py-16 text-center"><p className="font-display text-2xl">По этим параметрам туров пока нет</p><p className="mt-2 text-muted-foreground">Сбросьте фильтры или оставьте заявку на индивидуальный подбор.</p><Button onClick={reset} variant="outline" className="mt-6">Показать все туры</Button></div>
      )}
    </section>
  );
}
