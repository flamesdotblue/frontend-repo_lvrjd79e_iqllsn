import Hero from "./components/Hero";
import ProductHighlights from "./components/ProductHighlights";
import BrewGuides from "./components/BrewGuides";
import SubscriptionCTA from "./components/SubscriptionCTA";
import { Coffee } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="inline-flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-amber-50">
            <Coffee className="h-5 w-5" />
          </div>
          <span className="text-base font-semibold tracking-tight text-stone-900">
            Morninghaus
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-stone-700 md:flex">
          <a className="hover:text-stone-900" href="#appliances">Appliances</a>
          <a className="hover:text-stone-900" href="#coffee">Coffee</a>
          <a className="hover:text-stone-900" href="#guides">Guides</a>
          <a className="hover:text-stone-900" href="#subscribe">Subscriptions</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-900 hover:border-stone-400">
            Sign in
          </button>
          <button className="hidden rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white hover:bg-stone-800 sm:inline-block">
            Cart (0)
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 text-sm text-stone-600 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-stone-900">Shop</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#appliances" className="hover:text-stone-900">Espresso Machines</a></li>
              <li><a href="#appliances" className="hover:text-stone-900">Grinders</a></li>
              <li><a href="#appliances" className="hover:text-stone-900">Kettles</a></li>
              <li><a href="#coffee" className="hover:text-stone-900">Single-Origin Coffee</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-stone-900">Learn</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#guides" className="hover:text-stone-900">Brew Guides</a></li>
              <li><a href="#" className="hover:text-stone-900">Our Story</a></li>
              <li><a href="#" className="hover:text-stone-900">Sourcing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-stone-900">Support</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-stone-900">FAQ</a></li>
              <li><a href="#" className="hover:text-stone-900">Warranty</a></li>
              <li><a href="#" className="hover:text-stone-900">Shipping & Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-stone-900">Newsletter</h4>
            <p className="mt-3 max-w-xs">Thoughtful releases and brew tips, twice a month.</p>
            <form className="mt-3 flex max-w-xs gap-2">
              <input
                type="email"
                placeholder="you@domain.com"
                className="w-full rounded-md border border-stone-300 px-3 py-2 text-sm outline-none transition placeholder:text-stone-400 focus:border-stone-400"
              />
              <button className="rounded-md bg-stone-900 px-3 py-2 text-sm font-semibold text-white hover:bg-stone-800">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 border-t border-stone-200 pt-6 text-xs text-stone-500">
          © {new Date().getFullYear()} Morninghaus. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <Header />
      <main>
        <Hero />
        <div id="appliances">
          <ProductHighlights />
        </div>
        {/* Anchor shim for coffee section inside ProductHighlights */}
        <div id="coffee" className="sr-only" aria-hidden="true" />
        <div id="guides">
          <BrewGuides />
        </div>
        <div id="subscribe">
          <SubscriptionCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
