import { Package, Shield, Truck, Star } from "lucide-react";

const applianceItems = [
  {
    title: "Brew Station Pro",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Precision espresso machine",
  },
  {
    title: "Grind Studio S",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Stepless burr grinder",
  },
  {
    title: "Kettle 60°",
    image:
      "https://images.unsplash.com/photo-1544099858-75feebde34cf?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Variable-temp gooseneck",
  },
];

const coffeeItems = [
  {
    title: "Ethiopia Yirgacheffe",
    image:
      "https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Jasmine • Bergamot • Honey",
  },
  {
    title: "Colombia Huila",
    image:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Red apple • Toffee • Cocoa",
  },
  {
    title: "Kenya Nyeri",
    image:
      "https://images.unsplash.com/photo-1422207215656-443d1a22ab78?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Blackcurrant • Grapefruit • Molasses",
  },
];

function FeatureBar() {
  return (
    <div className="mt-12 grid gap-4 rounded-xl border border-stone-200 bg-white p-4 text-stone-700 shadow-sm sm:grid-cols-3">
      <div className="flex items-center gap-3">
        <Truck className="h-5 w-5 text-stone-900" />
        Free carbon-neutral shipping over $100
      </div>
      <div className="flex items-center gap-3">
        <Shield className="h-5 w-5 text-stone-900" />
        2-year warranty on all appliances
      </div>
      <div className="flex items-center gap-3">
        <Star className="h-5 w-5 text-stone-900" />
        4.9/5 from verified reviews
      </div>
    </div>
  );
}

function Grid({ items, id }) {
  return (
    <div id={id} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:shadow-md"
        >
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-between p-4">
            <div>
              <h3 className="text-base font-semibold text-stone-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-stone-600">{item.subtitle}</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-900 transition hover:border-stone-400">
              <Package className="h-4 w-4" />
              View
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function ProductHighlights() {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
              Design-forward Appliances
            </h2>
            <p className="mt-2 max-w-2xl text-stone-600">
              Minimal aesthetics meet precision engineering. Built to be seen and
              made to last.
            </p>
          </div>
          <a
            href="#appliances"
            className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-900 hover:border-stone-400"
          >
            Explore all
          </a>
        </div>
        <Grid items={applianceItems} id="appliances" />
        <FeatureBar />

        <div className="mt-16 mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
              Ethically Sourced Coffee
            </h2>
            <p className="mt-2 max-w-2xl text-stone-600">
              Single-origin lots roasted to highlight terroir and natural
              sweetness. Traceable from farm to cup.
            </p>
          </div>
          <a
            href="#coffee"
            className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-900 hover:border-stone-400"
          >
            Browse coffees
          </a>
        </div>
        <Grid items={coffeeItems} id="coffee" />
      </div>
    </section>
  );
}
