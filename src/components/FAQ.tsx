import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Quels types de dossiers traitez-vous ?",
    a: "Nous traitons des affaires de droit des affaires, droit des sociétés, droit fiscal et contentieux pour les entreprises et les particuliers.",
  },
  {
    q: "Proposez-vous une première consultation gratuite ?",
    a: "Oui — chaque nouveau client bénéficie d'une première consultation gratuite pour analyser ses besoins de manière personnalisée.",
  },
  {
    q: "Comment sont calculés vos honoraires ?",
    a: "Nos honoraires dépendent de la complexité du dossier. Nous proposons une facturation transparente au forfait ou au taux horaire selon le cas.",
  },
  {
    q: "Mon dossier sera-t-il suivi par un avocat dédié ?",
    a: "Absolument. Un avocat de notre cabinet vous accompagnera directement, de la consultation initiale jusqu'à la résolution du litige.",
  },
  {
    q: "Comment faire appel à vos services ?",
    a: "Réservez simplement une consultation via notre formulaire de contact ou appelez notre cabinet à Abidjan. Nous vous répondrons dans les plus brefs délais.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(-1);

  return (
    <section id="faq" className="container py-16 md:py-24">
      <h2 className="text-center font-serif text-[3rem] md:text-[3.85rem] leading-[0.95] text-primary">
        Foire Aux <br />
        <span className="text-gold">Questions</span>
      </h2>

      <div className="mt-8 md:mt-10 max-w-6xl mx-auto divide-y divide-border border-y border-border">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <button
              key={f.q}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full text-left py-5 md:py-6 group"
            >
              <div className="flex items-center justify-between gap-6">
                <span className="font-serif text-[2rem] md:text-[2.5rem] leading-none text-primary">
                  {f.q}
                </span>
                <span className="text-gold shrink-0">
                  {isOpen ? <Minus size={27} strokeWidth={1.6} /> : <Plus size={27} strokeWidth={1.6} />}
                </span>
              </div>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden text-[1rem] text-muted-foreground leading-relaxed pr-12 max-w-[90ch]">
                  {f.a}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
