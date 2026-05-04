import { ArrowUpRight } from "lucide-react";

const items = [
  { title: "Droit des affaires", desc: "Accompagnement juridique des entreprises dans leurs activités commerciales et stratégies de croissance." },
  { title: "Droit des sociétés", desc: "Création, structuration, fusions et acquisitions, et assistance à la gouvernance d'entreprise." },
  { title: "Droit fiscal", desc: "Optimisation fiscale, conformité réglementaire et assistance lors des contrôles et contentieux fiscaux." },
  { title: "Contentieux", desc: "Représentation et défense pugnace de vos intérêts devant les juridictions civiles et commerciales." },
  { title: "Conseil juridique", desc: "Rédaction et révision de contrats, audits juridiques et conseils stratégiques personnalisés." },
  { title: "Gestion des litiges", desc: "Médiation, arbitrage et recours aux modes alternatifs de résolution des conflits pour des solutions rapides." },
];

const Expertise = () => {
  return (
    <section id="service" className="container py-16 md:py-24">
      <h2 className="text-center font-serif text-[3rem] md:text-[3.65rem] leading-none text-primary">
        Nos Domaines <span className="italic text-gold">D'Expertise</span>
      </h2>

      <div className="mt-10 md:mt-12 max-w-6xl mx-auto divide-y divide-border border-y border-border">
        {items.map((item) => {
          return (
            <div
              key={item.title}
              className="grid grid-cols-12 items-center gap-4 md:gap-6 py-4 md:py-5 group"
            >
              <h3 className="col-span-12 md:col-span-4 font-serif text-[2.1rem] md:text-[2.2rem] leading-none text-primary group-hover:text-gold transition-smooth">
                {item.title}
              </h3>

              <p
                className="col-span-12 md:col-span-7 text-[1.03rem] text-muted-foreground/95 leading-relaxed transition-smooth"
              >
                {item.desc}
              </p>

              <span
                className="col-span-12 md:col-span-1 justify-self-end text-primary group-hover:text-gold transition-smooth"
              >
                <ArrowUpRight size={25} />
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Expertise;
