import { prisma } from '../../lib/prisma';
import './globals.css';
import Link from "next/link";

export default async function Home() {
  const universes = await prisma.universes.findMany();
  return (
    <section className="w-full max-w-5xl mx-auto rounded-2xl border bg-white/70 p-6 shadow min-h-48">
      <h2 className="text-lg font-semibold mb-4 text-black">Universes</h2>
      <div className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))]">
        {universes.map((universe) => (
          <Link href={`/universes/${universe.id}`} key={universe.id} className="p-4 rounded-lg border bg-blue-500">
            <h3 className="text-base font-semibold text-black">{universe.title}</h3>
            <p className="text-sm text-black">{universe.content.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}