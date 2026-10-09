import { LanguageSwitch } from "@/components/i18n/LanguageProvider";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { DandelionMark } from "@/components/dandelion-brand";

const NAV = [
  { href: "#search", label: "Найти тур" },
  { href: "#tours", label: "Готовые туры" },
  { href: "#stories", label: "Истории" },
  { href: "#individual", label: "Индивидуальный тур" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-4 sm:gap-3 sm:px-6 sm:py-5 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2 text-cream sm:gap-3" aria-label="Dandelion — на главную">
          <DandelionMark className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
          <span className="font-display text-[17px] sm:text-2xl">Dandelion</span>
        </Link>

        <LanguageSwitch />

        <nav className="hidden items-center gap-4 xl:gap-7 xl:flex" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="eyebrow text-cream/80 transition-colors hover:text-camel">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#individual"
          className="hidden rounded-md border border-cream/40 px-5 py-2 text-sm font-semibold text-cream transition-colors hover:border-camel hover:text-camel 2xl:inline-flex"
        >
          Подобрать тур
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-cream/40 text-cream transition-colors hover:border-camel hover:text-camel xl:hidden"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <nav className="mx-4 mb-5 rounded-md border border-cream/15 bg-ink/95 p-4 pb-6 shadow-xl backdrop-blur-md xl:hidden" aria-label="Мобильная навигация">
          <div className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-cream/10 px-3 py-4 text-sm font-semibold text-cream/85 transition-colors last:border-0 hover:text-camel"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
