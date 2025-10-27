import { ArrowRight, Check } from "lucide-react";

export default function SubscriptionCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(80%_60%_at_50%_0%,#fde68a33_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 rounded-2xl border border-amber-200 bg-amber-50/60 p-8 shadow-sm sm:p-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
              Coffee Subscriptions
            </h3>
            <p className="mt-3 max-w-xl text-stone-700">
              Never run out of your favorite single-origins. Choose your roast
              profile and delivery cadence, skip or cancel anytime.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-stone-800 sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" /> Freshly roasted weekly
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" /> Grind to preference
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" /> Member-only small lots
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" /> Pause anytime
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="#subscribe"
                className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-stone-800"
              >
                Build your plan
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-xl border border-amber-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?q=80&w=1600&auto=format&fit=crop"
                alt="Coffee subscription packaging in warm tones"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
