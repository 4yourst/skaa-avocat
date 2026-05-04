import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import t1 from "@/assets/testimonial-1.jpg";

const reviews = [
  {
    name: "Me. Jean Konan",
    role: "Avocat Associé",
    img: t1,
    text:
      "Spécialiste en droit des affaires et fusions-acquisitions, Me. Konan accompagne les grandes entreprises dans leurs opérations stratégiques depuis plus de 15 ans. Sa rigueur et sa vision globale sont des atouts majeurs pour nos clients.",
  },
  {
    name: "Me. Awa Sylla",
    role: "Avocate en Droit Fiscal",
    img: t1,
    text:
      "Experte en optimisation et contentieux fiscal, Me. Sylla aide nos clients à naviguer dans un environnement réglementaire complexe. Son approche proactive permet d'anticiper les risques et de sécuriser les opérations.",
  },
  {
    name: "Me. Marc Touré",
    role: "Avocat Contentieux",
    img: t1,
    text:
      "Pugnace et stratège, Me. Touré représente nos clients devant les juridictions avec une détermination sans faille. Il privilégie toujours les modes alternatifs de résolution des litiges quand cela sert l'intérêt de ses clients.",
  },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  const r = reviews[i];

  const next = () => setI((i + 1) % reviews.length);
  const prev = () => setI((i - 1 + reviews.length) % reviews.length);

  return (
    <section id="testimonial" className="container py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start max-w-6xl mx-auto">
        <div className="pt-1">
          <h2 className="font-serif text-[3rem] md:text-[3.35rem] leading-none text-primary">
            Notre <span className="italic text-gold">Équipe</span>
          </h2>
          <p className="mt-4 text-[1.02rem] text-muted-foreground max-w-[35ch] leading-relaxed">
            Rencontrez nos avocats expérimentés, dévoués à vous fournir la meilleure 
            défense et les conseils stratégiques les plus pointus.
          </p>

          <div className="mt-5 flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary text-primary hover:bg-gold hover:text-accent-foreground hover:border-transparent transition-smooth"
            >
              <ArrowLeft size={15} />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary text-primary hover:bg-gold hover:text-accent-foreground hover:border-transparent transition-smooth"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        <div className="bg-sage rounded-[1.2rem] p-0 shadow-soft overflow-hidden">
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-12 sm:col-span-5">
              <img
                src={r.img}
                alt={r.name}
                className="object-cover h-full w-full aspect-[4/3] sm:aspect-auto sm:min-h-[255px]"
                loading="lazy"
                width={700}
                height={800}
              />
            </div>
            <div className="col-span-12 sm:col-span-7 flex flex-col p-5 md:p-6">
              <Quote className="text-gold fill-gold" size={30} />
              <p className="mt-2 text-[1.02rem] text-primary/78 leading-relaxed line-clamp-5 flex-1">
                {r.text}
              </p>
              <div className="mt-3">
                <div className="font-semibold text-[1.07rem] text-primary">{r.name}</div>
                <div className="text-[0.92rem] text-muted-foreground">{r.role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
