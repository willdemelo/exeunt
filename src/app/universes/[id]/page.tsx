import { prisma } from '../../../../lib/prisma';
import Link from 'next/link';

export default async function UniversePage({
  params,
}: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <p>This is the page for the universe with id {id}.</p>
    </main>
  );

  const session = await prisma.sessions.findUnique({
    where: {
      universeId: id,
    },
  });

  return (
    <div>
      <Link href={`/`}>
        <p>Return to home page</p>
      </Link>
    </div>
  );
}