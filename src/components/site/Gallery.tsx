import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import g1 from "@/assets/gallery-weights.jpg";
import g2 from "@/assets/gallery-cardio.jpg";
import g3 from "@/assets/gallery-training.jpg";
import g4 from "@/assets/gallery-functional.jpg";
import g5 from "@/assets/gallery-locker.jpg";
import g6 from "@/assets/gallery-coach.jpg";

const items = [
  { src: g1, alt: "Zona de greutăți", span: "row-span-2" },
  { src: g2, alt: "Zona cardio", span: "" },
  { src: g3, alt: "Antrenament cu kettlebell", span: "" },
  { src: g4, alt: "Spațiu funcțional", span: "" },
  { src: g5, alt: "Vestiare moderne", span: "" },
  { src: g6, alt: "Personal trainer", span: "row-span-2" },
];

export default function Gallery() {
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="galerie" className="section-pad">
      <div className="container-prime">
        <div ref={ref} className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">Galerie</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight max-w-xl">
              Pătrunde în <span className="text-gradient">atmosfera</span> Prime
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Spații generoase, echipamente de top și detalii care fac diferența între un antrenament și o experiență.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[240px] gap-3 sm:gap-4">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden rounded-2xl ${it.span}`}
              aria-label={`Deschide ${it.alt}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-3 left-4 right-4 text-left text-white">
                <div className="text-xs uppercase tracking-[0.2em] text-primary-glow font-semibold">0{i + 1}</div>
                <div className="font-display font-bold text-base sm:text-lg">{it.alt}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md grid place-items-center p-4 animate-in fade-in"
          onClick={() => setOpen(null)}
        >
          <button className="absolute top-6 right-6 text-white text-3xl" aria-label="Închide">×</button>
          <img src={items[open].src} alt={items[open].alt} className="max-h-[85vh] max-w-[95vw] rounded-xl shadow-2xl" />
        </div>
      )}
    </section>
  );
}
