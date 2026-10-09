import { LanguageSwitch } from "@/components/i18n/LanguageProvider";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Check, MapPin, Plane, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DandelionMark, SiteFooter } from "@/components/dandelion-brand";
import { LeadForm } from "@/components/LeadForm";
import { TOURS } from "@/lib/tours";

export const Route = createFileRoute("/tours/$slug")({
  loader: ({ params }) => {
    const tour = TOURS.find((item) => item.slug === params.slug && item.slug !== "kenya");
    if (!tour) throw notFound();
    return tour;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.country}: ${loaderData.title} — Dandelion` : "Тур не найден — Dandelion" },
      { name: "description", content: loaderData?.subtitle ?? "Ознакомьтесь с направлениями путешествий Dandelion." },
      { property: "og:title", content: loaderData ? `${loaderData.country}: ${loaderData.title} — Dandelion` : "Тур не найден — Dandelion" },
      { property: "og:description", content: loaderData?.subtitle ?? "Ознакомьтесь с направлениями путешествий Dandelion." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TourDetail,
  notFoundComponent: () => <div className="mx-auto max-w-4xl px-6 py-24"><h1 className="font-display text-4xl">Тур не найден</h1><Button asChild className="mt-8"><Link to="/">К каталогу</Link></Button></div>,
});

function TourDetail() {
  const tour = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 bg-ink/90 backdrop-blur-md"><div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-4 sm:gap-3 sm:px-6 sm:py-5 sm:px-6 lg:px-8"><Link to="/" className="flex min-w-0 items-center gap-2 text-cream sm:gap-3"><DandelionMark className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" /><span className="font-display text-[17px] sm:text-2xl">Dandelion</span></Link><LanguageSwitch /><Button asChild variant="outline" className="shrink-0 max-w-[42px] px-2 text-xs sm:max-w-none sm:px-4 sm:text-sm border-cream/40 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"><Link to="/" hash="tours"><ArrowLeft /><span className="hidden sm:inline">К турам</span></Link></Button></div></header>
      <main>
        <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-ink"><img src={tour.image} alt={`${tour.country}: ${tour.title}`} width={1200} height={912} className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/40" /><div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-36 lg:px-8"><p className="eyebrow mb-5 text-camel">{tour.country} · {tour.tag}</p><h1 className="font-display max-w-3xl text-4xl sm:text-5xl leading-tight text-cream sm:text-6xl lg:text-7xl">{tour.title}</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85">{tour.subtitle}</p><div className="mt-8 flex flex-wrap gap-5 text-sm text-cream/85"><span className="inline-flex items-center gap-2"><CalendarDays className="h-5 w-5 text-camel" />{tour.month} 2026 · {tour.days}</span><span className="inline-flex items-center gap-2"><MapPin className="h-5 w-5 text-camel" />{tour.hotel}</span></div></div></section>

        <section className="border-b border-sand bg-cream-deep"><div className="mx-auto grid max-w-6xl gap-5 px-5 py-7 sm:flex sm:items-center sm:justify-between sm:px-6 sm:py-9 lg:px-8"><div><p className="eyebrow text-muted-foreground">Ориентировочная стоимость</p><p className="font-display mt-2 text-3xl text-gold">от ${tour.price.toLocaleString("en-US")} <span className="font-[family-name:var(--font-body)] text-base text-muted-foreground">/чел.</span></p></div><Button asChild className="h-11 w-full bg-ink px-5 text-cream hover:bg-ink-soft sm:h-12 sm:w-auto sm:px-6"><a href="#book">Оставить заявку <ArrowRight /></a></Button></div></section>

        <section className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8"><div><p className="eyebrow mb-4 text-gold">О путешествии</p><h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">{tour.country} в своём ритме</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{tour.intro}</p></div><div className="border-l border-sand pl-7"><p className="eyebrow mb-4 text-gold">Главное</p><ul className="space-y-4">{tour.highlights.map((highlight) => <li key={highlight} className="flex items-start gap-3"><Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span>{highlight}</span></li>)}</ul></div></section>

        <section className="bg-sand/35"><div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8"><div className="mb-12 max-w-2xl"><p className="eyebrow mb-4 text-gold">День за днём</p><h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">Маршрут путешествия</h2></div><div className="border-t border-camel/35">{tour.itinerary.map(([day, title, text]) => <article key={day} className="grid gap-4 border-b border-camel/35 py-8 md:grid-cols-[120px_1fr_1.5fr]"><p className="eyebrow text-gold">{day}</p><h3 className="font-display text-[17px] sm:text-2xl">{title}</h3><p className="leading-relaxed text-muted-foreground">{text}</p></article>)}</div></div></section>

        <section className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8"><div><p className="eyebrow mb-4 text-gold">Включено</p><h2 className="font-display text-4xl">Всё основное уже в маршруте</h2><ul className="mt-8 grid gap-4 sm:grid-cols-2">{tour.included.map((item) => <li key={item} className="flex items-start gap-3 border-b border-sand pb-4"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-cream"><Check className="h-3.5 w-3.5" /></span><span>{item}</span></li>)}</ul></div><div><p className="eyebrow mb-4 text-gold">Путь к путешествию</p><h2 className="font-display text-4xl">Из Израиля</h2><p className="mt-8 flex items-start gap-4 leading-relaxed text-muted-foreground"><Plane className="mt-1 h-5 w-5 shrink-0 text-gold" />{tour.travel}</p><p className="mt-8 border-t border-sand pt-6 text-sm leading-relaxed text-muted-foreground">Цена и программа — демонстрационные. Рейсы, даты, условия въезда и окончательную стоимость необходимо подтвердить перед бронированием.</p></div></section>

        <section id="book" className="bg-ink"><div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1.2fr] lg:px-8"><div><p className="eyebrow mb-4 text-camel">{tour.country}</p><h2 className="font-display text-4xl text-cream">Обсудим поездку?</h2><p className="mt-4 text-cream/70">Заполните демонстрационную форму, чтобы увидеть сценарий заявки. Данные не сохраняются и не отправляются.</p></div><LeadForm tourName={`${tour.country}: ${tour.title}`} /></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
