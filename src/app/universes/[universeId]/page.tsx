import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import '@/globals.css';

export default async function UniversePage({ params }: { params: { universeId: string } }) {
  const { universeId } = params;

  const itemFetchers: { [key: string]: () => Promise<any[]> } = {
    timelines: () => prisma.timelines.findMany({ where: { universeId: universeId } }),
    sessions: () => prisma.sessions.findMany({ where: { universeId: universeId } }),
    personas: () => prisma.personas.findMany({ where: { universeId: universeId } }),
    concepts: () => prisma.concepts.findMany({ where: { universeId: universeId } }),
    tones: () => prisma.tones.findMany({ where: { universeId: universeId } }),
    stages: () => prisma.stages.findMany({ where: { universeId: universeId } }),
    setPieces: () => prisma.setPieces.findMany({ where: { universeId: universeId } }),
    props: () => prisma.props.findMany({ where: { universeId: universeId } }),
    costumes: () => prisma.costumes.findMany({ where: { universeId: universeId } }),
    actors: () => prisma.actors.findMany({ where: { universeId: universeId } }),
    soundtracks: () => prisma.soundtracks.findMany({ where: { universeId: universeId } }),
  };

  const itemMap = new Map<string, any[]>();

  for (const key of Object.keys(itemFetchers)) {
    const data = await itemFetchers[key]();
    itemMap.set(key, data);
  }

  // Define display names for each section
  const displayNames: { [key: string]: string } = {
    sessions: 'Sessions',
    personas: 'Personas',
    concepts: 'Concepts',
    tones: 'Tones',
    stages: 'Stages',
    setPieces: 'Set Pieces',
    props: 'Props',
    costumes: 'Costumes',
    actors: 'Actors',
    soundtracks: 'Soundtracks',
  };

  return (
    <div>
      {Array.from(itemMap.entries()).map(([key, items]) => (
        <div className="large-card">
        <section key={key}>
          <h1 className="font-md">{displayNames[key]}</h1>
          <ul>
            {items?.map((item) => (
              <li key={item.id}>
                <Link className="font-sm" href={`/universes/${universeId}/${key}/${item.id}`}>
                  {item.name ?? item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        </div>
      ))}
    </div>
  );
}