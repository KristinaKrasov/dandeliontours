import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TOURS } from "@/lib/tours";

export type SearchProps = {
  country: string; month: string; budget: string;
  setCountry: (value: string) => void; setMonth: (value: string) => void; setBudget: (value: string) => void;
  onSearch: () => void;
};

export function TourSearch({ country, month, budget, setCountry, setMonth, setBudget, onSearch }: SearchProps) {
  const fieldClass = "h-13 w-full border-0 border-b border-sand bg-transparent px-0 text-sm font-semibold text-foreground outline-none focus:border-gold";
  const countries = ["Все страны", ...new Set(TOURS.map((tour) => tour.country))];
  const months = ["Любой месяц", ...new Set(TOURS.map((tour) => tour.month))];

  return (
    <section id="search" className="bg-cream-deep px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7"><p className="eyebrow mb-3 text-gold">Куда отправимся</p><h2 className="font-display text-3xl sm:text-4xl">Найдите своё путешествие</h2></div>
        <div className="grid gap-5 border-y border-sand/70 py-6 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end">
          <label><span className="eyebrow text-muted-foreground">Страна</span><select aria-label="Страна" value={country} onChange={(e) => setCountry(e.target.value)} className={fieldClass}>{countries.map((value) => <option key={value} value={value}>{value}</option>)}</select></label>
          <label><span className="eyebrow text-muted-foreground">Месяц</span><select aria-label="Месяц" value={month} onChange={(e) => setMonth(e.target.value)} className={fieldClass}>{months.map((value) => <option key={value} value={value}>{value}</option>)}</select></label>
          <label><span className="eyebrow text-muted-foreground">Бюджет на человека</span><select aria-label="Бюджет" value={budget} onChange={(e) => setBudget(e.target.value)} className={fieldClass}>{["Любой бюджет", "до $2 000", "от $2 000"].map((value) => <option key={value} value={value}>{value}</option>)}</select></label>
          <Button onClick={onSearch} className="h-13 rounded-md bg-ink px-7 text-cream hover:bg-ink-soft"><Search />Найти</Button>
        </div>
      </div>
    </section>
  );
}
