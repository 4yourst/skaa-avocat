import { Play } from "lucide-react";
import supportBg from "@/assets/support-bg.jpg";

const features = [
  "Accompagnement personnalisé",
  "Première consultation gratuite",
  "Honoraires transparents",
];

const Support = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src={supportBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-primary/70" />

      <div className="relative container py-20 md:py-28 text-center text-primary-foreground">
        <h2 className="font-serif text-4xl md:text-6xl">Un Accompagnement Juridique Sur Mesure</h2>

        <button
          aria-label="Play video"
          className="mt-10 mx-auto grid h-20 w-20 place-items-center rounded-full bg-primary-foreground/15 backdrop-blur-md border border-primary-foreground/30 hover:bg-gold hover:border-transparent transition-smooth group"
        >
          <Play size={28} className="text-primary-foreground translate-x-0.5 group-hover:text-accent-foreground" />
        </button>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <div
              key={f}
              className={`px-6 ${i !== 0 ? "md:border-l border-primary-foreground/25" : ""}`}
            >
              <p className="text-lg md:text-xl text-primary-foreground/95">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
