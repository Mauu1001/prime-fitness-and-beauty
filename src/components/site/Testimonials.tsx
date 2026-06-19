import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  {
    name: "Cezar Vasiliu",
    role: "Membru",
    text: "Sală curată, aparatură de calitate și o atmosferă foarte bună. Recomand cu încredere!",
  },
  {
    name: "Andreea Popa",
    role: "Membru",
    text: "Locul perfect să te apuci de sport. Personalul este atent și mereu dispus să ajute.",
  },
  {
    name: "Mihai Tudor",
    role: "Membru",
    text: "Echipamente noi, multe variante de exerciții și un program flexibil. Exact ce căutam!",
  },
  {
    name: "Ioana Dinu",
    role: "Membru",
    text: "Atmosfera te motivează din primul minut. Am văzut rezultate reale în doar câteva săptămâni.",
  },
];

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section-pad bg-secondary/40">
      <div className="container-prime">
        <div ref={ref} className="reveal text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">Testimoniale</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Ce spun <span className="text-gradient">membrii noștri</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-surface border border-border p-8 sm:p-12 shadow-[var(--shadow-soft)] min-h-[260px]">
            {items.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 p-8 sm:p-12 flex flex-col justify-center transition-all duration-700 ${
                  i === idx ? "opacity-100 translate-x-0" : i < idx ? "opacity-0 -translate-x-8" : "opacity-0 translate-x-8"
                }`}
              >
                <div className="flex gap-1 mb-4 text-primary text-lg">★★★★★</div>
                <p className="font-display text-xl sm:text-2xl font-medium leading-snug">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-display font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-bold">{t.name}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === idx ? "w-10 bg-primary" : "w-2 bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
