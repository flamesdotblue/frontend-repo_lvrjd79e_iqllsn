import { ArrowRight, Coffee } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-stone-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-stone-900/90 px-3 py-1 text-xs font-medium text-amber-50">
              <Coffee className="h-3.5 w-3.5" />
              Elevate your morning ritual
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl md:text-6xl">
              Minimal design. Exceptional coffee. Thoughtful mornings.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
              A curated selection of design-forward appliances and ethically sourced, single-origin beans. Crafted for the design-conscious and brewed for the aficionados.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#appliances"
                className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-stone-800"
              >
                Shop Appliances
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#coffee"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:border-stone-400"
              >
                Shop Coffee
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-stone-600">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                Carbon-neutral roastery
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
                2-year appliance warranty
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl bg-gradient-to-br from-stone-100 via-amber-50 to-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop"
                alt="Minimal espresso setup with warm light"
                className="h-full w-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
