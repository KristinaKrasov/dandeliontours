import { LanguageSwitch } from "@/components/i18n/LanguageProvider";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Check, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DandelionMark, SiteFooter } from "@/components/dandelion-brand";
import { LeadForm } from "@/components/LeadForm";
import heroImage from "@/assets/kenya-hero.jpg";
import elephantsImage from "@/assets/kenya-elephants.jpg";
import giraffesImage from "@/assets/kenya-giraffes.jpg";
import beachImage from "@/assets/kenya-beach.jpg";

export const Route = createFileRoute("/tours/kenya")({
  head: () => ({
    meta: [
      { title: "Кения: сафари и океан — Dandelion" },
      { name: "description", content: "Подробная программа тура в Кению на 8 дней: Маасаи-Мара, Амбосели и пляжи Диани." },
      { property: "og:title", content: "Кения: сафари и океан — Dandelion" },
      { property: "og:description", content: "8 дней сафари, лоджей и отдыха на берегу Индийского океана." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KenyaTour,
});

const DAYS = [
  ["День 1", "Перелёт и Наироби", "Встреча в аэропорту, трансфер в бутик-отель и спокойный вечер после дороги."],
  ["Дни 2–4", "Маасаи-Мара", "Перелёт в саванну, утренние и вечерние сафари, Большая пятёрка и ужины у костра."],
  ["Дни 5–6", "Амбосели", "Слоны на фоне Килиманджаро, открытые джипы и ночь в лодже среди дикой природы."],
  ["Дни 7–8", "Пляж Диани", "Белый песок, Индийский океан, свободный день и возвращение домой."],
];
const INCLUDED = ["Международный и внутренние перелёты", "Проживание в лоджах 4–5★", "Все сафари на открытых джипах", "Полный пансион во время сафари", "Русскоговорящий сопровождающий", "Медицинская страховка"];

function KenyaTour() {
  return (
    <div className="min-h-screen bg-background font-[family-name:var(--font-body)] text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 bg-ink/90 backdrop-blur-md"><div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-4 sm:gap-3 sm:px-6 sm:py-5 sm:px-6 lg:px-8"><Link to="/" className="flex min-w-0 items-center gap-2 text-cream sm:gap-3"><DandelionMark className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" /><span className="font-display text-[17px] sm:text-2xl">Dandelion</span></Link><LanguageSwitch /><Button asChild variant="outline" className="shrink-0 max-w-[42px] px-2 text-xs sm:max-w-none sm:px-4 sm:text-sm border-cream/40 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"><Link to="/"><ArrowLeft /><span className="hidden sm:inline">На главную</span></Link></Button></div></header>
      <main>
        <section className="relative flex min-h-[82svh] items-end overflow-hidden bg-ink"><img src={heroImage} alt="Саванна Кении на закате" width={1920} height={1152} className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/45" /><div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-36 lg:px-8"><p className="eyebrow mb-5 text-camel">Горячее предложение · 14 октября 2026</p><h1 className="font-display max-w-3xl text-4xl sm:text-5xl leading-[1.08] text-cream sm:text-6xl lg:text-7xl">Кения: сафари и океан</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">Восемь дней среди саванны, слонов у подножия Килиманджаро и белых пляжей Индийского океана.</p><div className="mt-9 flex flex-wrap items-center gap-4 text-sm text-cream/80"><span className="inline-flex items-center gap-2"><CalendarDays className="text-camel" />8 дней</span><span className="inline-flex items-center gap-2"><Users className="text-camel" />до 8 человек</span><span className="inline-flex items-center gap-2"><MapPin className="text-camel" />3 региона</span></div></div></section>
        <section className="border-b border-sand bg-cream-deep"><div className="mx-auto grid max-w-6xl gap-5 px-5 py-7 sm:grid-cols-3 sm:gap-7 sm:px-6 sm:py-10 lg:px-8"><div><p className="eyebrow text-muted-foreground">Стоимость</p><p className="font-display mt-2 text-3xl text-gold">$3 200 <span className="font-[family-name:var(--font-body)] text-base text-muted-foreground">/чел.</span></p><p className="text-sm text-muted-foreground">ориентировочная стоимость</p></div><div><p className="eyebrow text-muted-foreground">Вылет</p><p className="font-display mt-2 text-2xl">14 октября</p><p className="text-sm text-muted-foreground">из Тель-Авива, с пересадкой</p></div><div className="sm:text-right"><p className="eyebrow text-muted-foreground">Свободно</p><p className="font-display mt-2 text-2xl">5 мест</p><a href="#book" className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-gold">Оставить заявку <ArrowRight className="h-4 w-4" /></a></div></div></section>
        <section className="mx-auto max-w-6xl px-6 pt-12 lg:px-8"><p className="border-l-2 border-gold pl-5 text-sm leading-relaxed text-muted-foreground">Для въезда в Кению по израильскому паспорту требуется электронное разрешение eTA. Перелёт из Тель-Авива — с пересадкой; расписание, возможность оформления и итоговую стоимость уточняйте перед бронированием.</p></section>
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8"><div className="mb-14 max-w-2xl"><p className="eyebrow mb-4 text-gold">День за днём</p><h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">Маршрут путешествия</h2></div><div className="border-t border-sand">{DAYS.map(([day, title, text], index) => <article key={day} className="grid gap-4 border-b border-sand py-8 md:grid-cols-[120px_1fr_1.5fr] md:items-start"><p className="eyebrow text-gold">{day}</p><h3 className="font-display text-[17px] sm:text-2xl">{title}</h3><p className="leading-relaxed text-muted-foreground">{text}</p></article>)}</div></section>
        <section className="bg-sand/35"><div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="eyebrow mb-4 text-gold">Без скрытых сюрпризов</p><h2 className="font-display text-4xl">Что входит в стоимость</h2><p className="mt-5 leading-relaxed text-muted-foreground">Отдельно оплачиваются электронная виза, личные расходы и дополнительные экскурсии по желанию.</p></div><ul className="grid gap-4 sm:grid-cols-2">{INCLUDED.map((item) => <li key={item} className="flex items-start gap-3 border-b border-camel/40 pb-4"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-cream"><Check className="h-3.5 w-3.5" /></span><span>{item}</span></li>)}</ul></div></div></section>
        <section className="overflow-hidden py-24"><div className="mx-auto mb-10 max-w-6xl px-6 lg:px-8"><p className="eyebrow mb-4 text-gold">Кения в кадре</p><h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">От саванны до океана</h2><p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Три настроения одного путешествия: дикая природа Амбосели, золотой свет Маасаи-Мара и спокойный берег Диани.</p></div><div className="kenya-carousel"><div className="kenya-carousel-track">{[...[[elephantsImage,"Слоны в Амбосели"],[giraffesImage,"Закат в Маасаи-Мара"],[beachImage,"Пляж Диани"]], ...[[elephantsImage,"Слоны в Амбосели"],[giraffesImage,"Закат в Маасаи-Мара"],[beachImage,"Пляж Диани"]]].map(([src, alt], index) => <figure key={`${alt}-${index}`} className="w-[76vw] shrink-0 sm:w-[48vw] lg:w-[32vw]"><div className="overflow-hidden rounded-md"><img src={src} alt={index < 3 ? alt : ""} aria-hidden={index >= 3} width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full object-cover" /></div><figcaption className="eyebrow mt-4 text-center text-muted-foreground">{alt}</figcaption></figure>)}</div></div></section>
        <section id="book" className="bg-ink"><div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1.2fr] lg:px-8"><div><p className="eyebrow mb-4 text-camel">Демонстрация формы</p><h2 className="font-display text-4xl text-cream">Хочу в Кению</h2><p className="mt-4 text-cream/70">Проверьте сценарий заявки: данные валидируются, но не сохраняются и не отправляются.</p></div><LeadForm tourName="Кения: сафари и океан" /></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
