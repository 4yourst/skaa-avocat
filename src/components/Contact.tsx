import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import contactImg from "@/assets/contact-lawyer.jpg";

const services = [
  "Sélectionnez un service",
  "Droit des affaires",
  "Droit des sociétés",
  "Droit fiscal",
  "Contentieux",
  "Conseil juridique",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0],
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé — Notre équipe vous contactera rapidement.");
    setForm({ name: "", email: "", phone: "", service: services[0], message: "" });
  };

  const inputCls =
    "w-full rounded-full bg-background/80 border border-border px-5 py-3 text-sm text-primary placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth";

  return (
    <section id="contact" className="container py-20 md:py-28 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
        <div className="rounded-3xl overflow-hidden shadow-card">
          <img
            src={contactImg}
            alt="Cabinet SKAA Avocats"
            className="h-full w-full object-cover aspect-[4/5]"
            loading="lazy"
            width={800}
            height={1000}
          />
        </div>

        <div className="bg-sage rounded-3xl p-8 md:p-10 shadow-soft">
          <h2 className="font-serif text-4xl md:text-5xl text-primary">
            Contactez <span className="italic text-gold">Nous</span>
          </h2>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                type="text"
                placeholder="Votre nom"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputCls}
              />
              <input
                required
                type="email"
                placeholder="Votre email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputCls}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Votre téléphone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputCls}
              />
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={inputCls}
              >
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            <textarea
              required
              rows={5}
              placeholder="Saisissez votre message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-3xl bg-background/80 border border-border px-5 py-4 text-sm text-primary placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth resize-none"
            />

            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-full bg-gold text-accent-foreground pl-6 pr-2 py-2 shadow-gold transition-smooth hover:translate-y-[-2px]"
            >
              <span className="font-medium">Envoyer le message</span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowRight size={16} />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
