import { PlayCircle, Thermometer } from "lucide-react";
import { motion } from "framer-motion";

const guides = [
  {
    title: "Espresso Fundamentals",
    time: "3 min",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Pour-over with Precision",
    time: "4 min",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Milk Texturing 101",
    time: "2 min",
    image:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function BrewGuides() {
  return (
    <section className="bg-gradient-to-b from-white to-stone-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-stone-900">
          <Thermometer className="h-5 w-5" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Brew Guides
          </h2>
        </div>
        <p className="mb-8 max-w-2xl text-stone-600">
          Master mindful routines with concise, beautifully shot tutorials. Save
          favorites and brew with confidence.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g, i) => (
            <motion.article
              key={g.title}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:shadow-md"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={g.image}
                  alt={g.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-stone-900 backdrop-blur">
                    <PlayCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">{g.time} video</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-stone-900">
                  {g.title}
                </h3>
                <p className="mt-1 text-sm text-stone-600">
                  Step-by-step technique with pro tips.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
