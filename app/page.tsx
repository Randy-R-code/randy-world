import { WorldMap } from "@/components/map/world-map";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-6 pt-12 pb-8">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col">
        {/* Hero — H1 visible pour SEO */}
        <header className="mb-10">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-zinc-500">
            Développeur Fullstack Freelance
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Randy World
          </h1>
          <p className="mt-3 max-w-md text-base text-zinc-400">
            Un portfolio interactif. Choisissez une zone pour explorer projets,
            apps, SEO ou me contacter.
          </p>
        </header>

        <WorldMap />
      </div>
    </main>
  );
}
