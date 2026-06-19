import { useReveal } from "@/hooks/use-reveal";
import ctaBg from "@/assets/cta-bg.jpg";

export default function CTA() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="section-pad">
      <div className="container-prime">
        <div ref={ref} className="reveal relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] text-white">
          <img src={ctaBg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 80% 50%, oklch(0.72 0.20 145 / 0.4), transparent 55%)" }} />

          <div className="relative px-8 py-16 sm:px-14 sm:py-24 lg:px-20 lg:py-28 max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-primary-glow font-semibold mb-5">Începe astăzi</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05]">
              Ești pregătit să începi <span className="text-gradient">transformarea?</span>
            </h2>
            <p className="mt-6 text-lg text-white/75 max-w-xl">
              Alătură-te comunității Prime Fitness &amp; Beauty și atinge-ți obiectivele alături de oameni la fel de motivați ca tine.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#abonamente" className="btn-primary">Devino Membru Astăzi</a>
              <a href="#contact" className="btn-ghost">Programează o vizită</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
