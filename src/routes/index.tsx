import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/dandelion-brand";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { TourSearch } from "@/components/home/TourSearch";
import { TourCatalog } from "@/components/home/TourCatalog";
import { Stories } from "@/components/home/Stories";
import { IndividualTour } from "@/components/home/IndividualTour";
import { TOURS } from "@/lib/tours";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dandelion — концепт сайта туристического агентства" },
      { name: "description", content: "Dandelion — демонстрационный проект туристического сайта с каталогом туров и индивидуальным подбором." },
      { property: "og:title", content: "Dandelion — travel website concept" },
      { property: "og:description", content: "Демонстрационный туристический сайт: каталог, фильтры, страницы туров и формы." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  const [country, setCountry] = useState("Все страны");
  const [month, setMonth] = useState("Любой месяц");
  const [budget, setBudget] = useState("Любой бюджет");
  const [applied, setApplied] = useState({ country, month, budget });

  const filteredTours = useMemo(() => TOURS.filter((tour) => {
    const countryMatch = applied.country === "Все страны" || tour.country === applied.country;
    const monthMatch = applied.month === "Любой месяц" || tour.month === applied.month;
    const budgetMatch = applied.budget === "Любой бюджет" || (applied.budget === "до $2 000" ? tour.price <= 2000 : tour.price > 2000);
    return countryMatch && monthMatch && budgetMatch;
  }), [applied]);

  const resetFilters = () => {
    setCountry("Все страны"); setMonth("Любой месяц"); setBudget("Любой бюджет");
    setApplied({ country: "Все страны", month: "Любой месяц", budget: "Любой бюджет" });
  };

  return (
    <div className="min-h-screen bg-background font-[family-name:var(--font-body)] text-foreground">
      <Header /><Hero />
      <TourSearch country={country} month={month} budget={budget} setCountry={setCountry} setMonth={setMonth} setBudget={setBudget} onSearch={() => setApplied({ country, month, budget })} />
      <TourCatalog tours={filteredTours} reset={resetFilters} />
      <Stories /><IndividualTour /><SiteFooter />
    </div>
  );
}
