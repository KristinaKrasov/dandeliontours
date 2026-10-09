import { MapPin, Sparkles, Users } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";

export function IndividualTour() {
  return (
    <section id="individual" className="bg-ink text-cream"><div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"><div><p className="eyebrow mb-5 text-camel">Маршрут только для вас</p><h2 className="font-display text-4xl leading-tight lg:text-5xl">Не нашли подходящий тур?</h2><p className="mt-5 max-w-md leading-relaxed text-cream/70">Расскажите, каким вы представляете свой отпуск. В демонстрационной форме можно проверить валидацию и сценарий отправки.</p><div className="mt-10 space-y-4 text-sm text-cream/75"><p className="flex items-center gap-3"><MapPin className="text-camel" />Любая точка мира</p><p className="flex items-center gap-3"><Users className="text-camel" />Для двоих, семьи или компании</p><p className="flex items-center gap-3"><Sparkles className="text-camel" />Маршрут с нуля или адаптация готового</p></div></div><LeadForm /></div></section>
  );
}
