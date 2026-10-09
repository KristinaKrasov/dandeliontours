import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { ScrollToTop } from "@/components/ScrollToTop";
import { translateCopy } from "@/lib/translations";

type Language = "ru" | "en";
const LanguageContext = createContext<{ language: Language; setLanguage: (value: Language) => void }>({ language: "ru", setLanguage: () => {} });

// Keep the original Russian copy so switching languages never loses information.
const originalText = new WeakMap<Text, string>();
const originalAttributes = new WeakMap<Element, Map<string, string>>();

function applyLanguage(root: Node, language: Language) {
  if (root.nodeType === Node.TEXT_NODE) {
    const node = root as Text;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue ?? "");
    const original = originalText.get(node)!;
    const translated = language === "en" ? translateCopy(original) : original;
    if (node.nodeValue !== translated) node.nodeValue = translated;
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  const element = root as Element;
  if (element.closest('[data-language-control]')) return;
  if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(element.tagName)) return;
  let attributes = originalAttributes.get(element);
  if (!attributes) { attributes = new Map(); originalAttributes.set(element, attributes); }
  for (const name of ["placeholder", "aria-label", "alt", "title"]) {
    if (!element.hasAttribute(name)) continue;
    if (!attributes.has(name)) attributes.set(name, element.getAttribute(name)!);
    const original = attributes.get(name)!;
    const translated = language === "en" ? translateCopy(original) : original;
    if (element.getAttribute(name) !== translated) element.setAttribute(name, translated);
  }
  // Inputs are user-controlled; only text labels and copy are translated.
  for (const child of Array.from(element.childNodes)) applyLanguage(child, language);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ru");
  useEffect(() => {
    const saved = window.localStorage.getItem("dandelion-language");
    if (saved === "en") setLanguage("en");
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    // Keep the browser tab title consistent with the selected language.
    const currentTitle = document.title;
    if (language === "en") {
      if (currentTitle.includes("Кения")) document.title = "Kenya: safari and ocean — Dandelion";
      else if (currentTitle.includes("концепт сайта")) document.title = "Dandelion — travel agency website concept";
    }
    window.localStorage.setItem("dandelion-language", language);
    const main = document.getElementById("dandelion-content");
    if (!main) return;
    let scheduled = false;
    const refresh = () => {
      if (scheduled) return;
      scheduled = true;
      queueMicrotask(() => { scheduled = false; applyLanguage(main, language); });
    };
    refresh();
    const observer = new MutationObserver(refresh);
    observer.observe(main, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["placeholder", "aria-label", "alt", "title"] });
    return () => observer.disconnect();
  }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage }}>
    <div id="dandelion-content">{children}</div>
    <ScrollToTop />
  </LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  return (
    <div data-language-control className="flex shrink-0 items-center gap-0.5 rounded-full border border-white/30 bg-[#292824]/90 p-0.5 text-[11px] font-bold text-white shadow-sm sm:gap-1 sm:p-1 sm:text-xs" aria-label="Language / Язык">
      <button type="button" onClick={() => setLanguage("ru")} disabled={language === "ru"} aria-pressed={language === "ru"} className={`rounded-full px-2 py-1.5 transition-colors sm:px-3 sm:py-2 ${language === "ru" ? "cursor-default bg-[#b69a74] text-[#292824]" : "cursor-pointer hover:bg-white/15"}`}>RU</button>
      <button type="button" onClick={() => setLanguage("en")} disabled={language === "en"} aria-pressed={language === "en"} className={`rounded-full px-2 py-1.5 transition-colors sm:px-3 sm:py-2 ${language === "en" ? "cursor-default bg-[#b69a74] text-[#292824]" : "cursor-pointer hover:bg-white/15"}`}>EN</button>
    </div>
  );
}

