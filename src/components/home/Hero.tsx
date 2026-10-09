import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/kenya-hero.mp4";
import heroVideoWebm from "@/assets/kenya-hero.webm";
import heroPoster from "@/assets/kenya-hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[94svh] items-end overflow-hidden bg-ink">
      <video poster={heroPoster} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover">
        <source src={heroVideoWebm} type="video/webm" />
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/40" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-36 lg:px-8 lg:pb-20">
        <p className="rise-in eyebrow mb-6 inline-flex items-center gap-3 rounded-full border border-camel/60 bg-ink/30 px-5 py-2.5 text-camel backdrop-blur-sm">
          <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-camel opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-camel" /></span>
          Горячее предложение · осталось 5 мест
        </p>
        <h1 className="rise-in font-display max-w-3xl text-5xl leading-[1.08] text-cream sm:text-6xl lg:text-7xl" style={{ animationDelay: "0.15s" }}>
          Кения: сафари,<br />о котором вы<br />мечтали
        </h1>
        <p className="rise-in mt-6 max-w-xl text-lg leading-relaxed text-cream/85" style={{ animationDelay: "0.3s" }}>
          8 дней от красных закатов Маасаи-Мара до белого песка пляжа Диани. Вылет из Тель-Авива 14 октября с пересадкой.
        </p>
        <div className="rise-in mt-9 flex flex-wrap items-center gap-5" style={{ animationDelay: "0.45s" }}>
          <Button asChild size="lg" className="h-13 rounded-md bg-gold px-7 font-bold uppercase tracking-[0.12em] text-cream hover:bg-camel">
            <Link to="/tours/kenya">Смотреть предложение <ArrowRight /></Link>
          </Button>
          <div className="ml-auto hidden text-right sm:block">
            <p className="text-sm text-cream/60 line-through">$4 000</p><p className="font-display text-4xl text-camel">$3 200 <span className="font-[family-name:var(--font-body)] text-sm text-cream/60">/чел.</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
