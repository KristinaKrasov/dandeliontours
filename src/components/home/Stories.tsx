import kenyaStoryImage from "@/assets/story-kenya-september.jpg";
import parisStoryImage from "@/assets/story-paris-may.jpg";
import italyAnniversaryImage from "@/assets/story-italy-anniversary.jpg";

const STORIES = [
  { image: kenyaStoryImage, name: "Даниэль Окойо", meta: "Кения · сентябрь · групповой тур", text: "Я давно мечтал увидеть Кению — родину моего дедушки. Эта поездка стала очень личной: сафари, новые друзья и чувство, будто я наконец прикоснулся к истории семьи." },
  { image: parisStoryImage, name: "Анна Власова", meta: "Париж · май · группа из 8 человек", text: "Париж был моей мечтой, и в мае она осуществилась. Нас было всего восемь — достаточно, чтобы найти друзей, и достаточно мало, чтобы почувствовать настоящий ритм города." },
  { image: italyAnniversaryImage, name: "Виктор и Лидия Соколовы", meta: "Италия · индивидуальный тур", text: "Дети подарили нам Италию на золотую свадьбу — 50 лет вместе. Маршрут был только для нас, спокойный и очень душевный." },
];

export function Stories() {
  return (
    <section id="stories" className="bg-sand/35 py-24"><div className="mx-auto max-w-6xl px-6 lg:px-8"><div className="mb-12 max-w-2xl"><p className="eyebrow mb-4 text-gold">Истории путешественников</p><h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">Истории, которые остаются с нами</h2><p className="mt-4 text-sm text-muted-foreground">Персонажи и отзывы созданы для демонстрации дизайна проекта.</p></div><div className="grid gap-6 md:grid-cols-3">{STORIES.map((story) => <article key={story.name} className="overflow-hidden rounded-md bg-background"><img src={story.image} alt={`${story.name} во время путешествия`} loading="lazy" width={960} height={1280} className="aspect-[3/4] w-full object-cover" /><div className="p-6"><p className="eyebrow text-gold">{story.meta}</p><h3 className="font-display mt-3 text-2xl">{story.name}</h3><p className="mt-4 leading-relaxed text-muted-foreground">«{story.text}»</p></div></article>)}</div></div></section>
  );
}
