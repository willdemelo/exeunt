import { prisma } from '../../lib/prisma';
import './globals.css';

export default async function Home() {
  const universes = await prisma.universes.findMany();
  return (
    <div>
      <h1 className="text-2xl font-bold">Universes</h1>
      <div className="universe-container">
        {universes.map((universe) => (
          <div key={universe.id} className="universe-card">
            <h2>{universe.title}</h2>
            <p>{universe.content.description}</p>
          </div>
        ))}
    </div>
    </div>
  );
}