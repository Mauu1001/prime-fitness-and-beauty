import { useState } from "react";
import { z } from "zod";
import { useReveal } from "@/hooks/use-reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Introdu un nume valid").max(80),
  email: z.string().trim().email("Email invalid").max(160),
  phone: z.string().trim().min(6, "Telefon invalid").max(30),
  message: z.string().trim().min(5, "Scrie un mesaj").max(1000),
});

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      setError(r.error.issues[0]?.message ?? "Verifică datele formularului");
      setStatus("err");
      return;
    }
    const text = encodeURIComponent(
      `Salut! Sunt ${r.data.name}.\nEmail: ${r.data.email}\nTelefon: ${r.data.phone}\n\n${r.data.message}`
    );
    window.open(`https://wa.me/40733787669?text=${text}`, "_blank", "noopener");
    setStatus("ok");
    setError(null);
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <section id="contact" className="section-pad">
      <div className="container-prime">
        <div ref={ref} className="reveal text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">Contact</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Hai să ne <span className="text-gradient">cunoaștem</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Răspundem rapid la mesajele tale. Sună-ne, scrie-ne pe WhatsApp sau completează formularul.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8">
          <div className="space-y-6">
            <InfoCard icon="📍" title="Adresă" lines={["617075 Borca, Neamț", "România"]} />
            <InfoCard icon="📞" title="Telefon" lines={["0733 787 669"]} href="tel:0733787669" />
            <InfoCard icon="💬" title="WhatsApp" lines={["Scrie-ne direct"]} href="https://wa.me/40733787669" />

            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)] aspect-[4/3] sm:aspect-video">
              <iframe
                title="Hartă Prime Fitness & Beauty"
                src="https://www.google.com/maps?q=Borca%2C+Neamt%2C+Romania&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="relative rounded-3xl bg-surface border border-border p-7 sm:p-9 shadow-[var(--shadow-soft)] space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nume" name="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Telefon" name="phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
            </div>
            <Field label="Email" name="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            <Field label="Mesaj" name="message" textarea value={form.message} onChange={(v) => setForm({ ...form, message: v })} />

            {status === "err" && <p className="text-sm text-destructive">{error}</p>}
            {status === "ok" && <p className="text-sm text-primary">Mesajul tău este pregătit! Continuă în WhatsApp.</p>}

            <button type="submit" className="btn-primary w-full !py-4">
              Trimite mesajul
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Mesajul se va deschide în WhatsApp pentru un răspuns rapid.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, lines, href }: { icon: string; title: string; lines: string[]; href?: string }) {
  const Wrap: React.ElementType = href ? "a" : "div";
  return (
    <Wrap
      {...(href && { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener" })}
      className="flex items-start gap-4 rounded-2xl bg-surface border border-border p-5 hover:border-primary/40 transition-all hover:-translate-y-0.5 shadow-[var(--shadow-soft)]"
    >
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-2xl">{icon}</div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">{title}</div>
        {lines.map((l) => (
          <div key={l} className="font-display font-bold text-lg leading-snug">{l}</div>
        ))}
      </div>
    </Wrap>
  );
}

function Field({
  label, name, value, onChange, type = "text", textarea,
}: {
  label: string; name: string; value: string; onChange: (v: string) => void; type?: string; textarea?: boolean;
}) {
  const cls = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15";
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-2">{label}</span>
      {textarea ? (
        <textarea name={name} rows={5} value={value} onChange={(e) => onChange(e.target.value)} className={cls} required />
      ) : (
        <input name={name} type={type} value={value} onChange={(e) => onChange(e.target.value)} className={cls} required />
      )}
    </label>
  );
}
