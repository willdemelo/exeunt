import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import '@/globals.css';

export default async function ActorsPage({ params }: { params: { universeId: string, itemId: string } }) {
  const { universeId, itemId } = params;
  const actor = await prisma.actors.findUnique({
    where: { universeId: universeId, id: itemId },
  });

  return (
    <div>
      <h1 className="font-md">{actor?.title}</h1> 
      <p className="font-sm">{actor?.content.description}</p>
    </div>
  );
}