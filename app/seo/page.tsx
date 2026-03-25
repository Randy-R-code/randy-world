import { PageShell } from "@/components/layout/page-shell";
import { Globe, MapPin, Search, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO District — Randy World",
  description:
    "Référencement local et création de sites vitrines par Randy, développeur freelance. Spécialiste SEO à Perpignan et en France.",
};

const services = [
  {
    icon: MapPin,
    title: "SEO local",
    desc: "Référencement Google Maps, fiches GMB, pages locales optimisées. Pour les artisans et PME qui veulent être trouvés dans leur ville.",
    color: "#10b981",
  },
  {
    icon: Globe,
    title: "Sites vitrines",
    desc: "Sites rapides, accessibles et indexables. Construits avec Next.js pour des scores Lighthouse > 95.",
    color: "#10b981",
  },
  {
    icon: Search,
    title: "Audit SEO",
    desc: "Analyse complète : structure, contenu, performances, backlinks. Un plan d'action concret pour progresser.",
    color: "#10b981",
  },
  {
    icon: TrendingUp,
    title: "Stratégie de contenu",
    desc: "Pages cibles, cocon sémantique, blog optimisé. Du contenu qui attire et convertit sur le long terme.",
    color: "#10b981",
  },
];

const zones = [
  {
    city: "Perpignan",
    slug: "perpignan",
    desc: "Référencement local et création de sites à Perpignan",
  },
  {
    city: "Montpellier",
    slug: "montpellier",
    desc: "SEO et sites vitrines pour artisans à Montpellier",
  },
  {
    city: "Toulouse",
    slug: "toulouse",
    desc: "Référencement local à Toulouse",
  },
];

export default function SeoPage() {
  return (
    <PageShell
      label="SEO District"
      title="SEO local & sites vitrines"
      tagline="Être trouvé sur Google par les bons clients, au bon moment."
      color="#10b981"
      icon="globe"
    >
      {/* Services */}
      <section className="mb-12">
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="rounded-xl border p-5"
              style={{
                borderColor: "#10b98118",
                background: "oklch(0.13 0.012 252)",
              }}
            >
              <div
                className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${color}18` }}
              >
                <Icon size={14} style={{ color }} />
              </div>
              <h2 className="mb-1.5 text-sm font-semibold text-white">
                {title}
              </h2>
              <p className="text-sm text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Zones géographiques */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-white">
          Zones couvertes
        </h2>
        <div className="flex flex-wrap gap-3">
          {zones.map((zone) => (
            <a
              key={zone.slug}
              href={`/seo/${zone.slug}`}
              className="inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm transition-colors hover:border-emerald-500/30"
              style={{
                borderColor: "#10b98120",
                background: "oklch(0.13 0.012 252)",
              }}
            >
              <MapPin size={12} style={{ color: "#10b981" }} />
              <span className="font-medium text-white">{zone.city}</span>
              <span className="text-xs text-zinc-500">{zone.desc}</span>
            </a>
          ))}
        </div>
        <p className="mt-3 text-xs text-zinc-600">
          Intervention possible partout en France en remote.
        </p>
      </section>

      {/* Stats */}
      <section className="mb-12">
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              value: "Top 3",
              label: "positions obtenues sur les requêtes cibles",
            },
            {
              value: "95+",
              label: "score Lighthouse moyen sur les sites livrés",
            },
            {
              value: "3 mois",
              label: "pour observer les premiers résultats SEO",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border p-4 text-center"
              style={{
                borderColor: "#10b98118",
                background: "oklch(0.13 0.012 252)",
              }}
            >
              <p className="text-2xl font-bold" style={{ color: "#10b981" }}>
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div
        className="rounded-xl border p-6"
        style={{ borderColor: "#10b98120" }}
      >
        <h2 className="text-lg font-semibold text-white">
          Vous voulez plus de visibilité locale ?
        </h2>
        <p className="mt-1 text-sm text-zinc-400">
          Audit gratuit de votre présence en ligne. Je vous dis exactement où
          vous en êtes et comment progresser.
        </p>
        <a
          href="/about"
          className="mt-4 inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-opacity hover:opacity-80"
          style={{
            backgroundColor: "#10b98118",
            color: "#10b981",
            border: "1px solid #10b98130",
          }}
        >
          Demander un audit gratuit →
        </a>
      </div>
    </PageShell>
  );
}
