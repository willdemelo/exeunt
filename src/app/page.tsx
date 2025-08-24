import { prisma } from '../../lib/prisma';
import '@/globals.css';
import Link from "next/link";

export default async function Home() {
  const universes = await prisma.universes.findMany();
  return (
    <section className="large-card">
      <h2 className="font-lg">Universes</h2>
      <div className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))]">
        {universes.map((universe) => (
          <Link href={`/universes/${universe.id}`} key={universe.id} className="small-card">
            <h3 className="font-md">{universe.title}</h3>
            <p className="font-sm">{universe.content.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}