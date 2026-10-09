import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 240);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  if (!visible) return null;
  return (
    <button type="button" aria-label="Вернуться наверх" title="Наверх"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-[90] flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-cream/30 bg-ink text-cream shadow-lg transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:bottom-7 sm:right-7">
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
