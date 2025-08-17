import { prisma } from '../../../../lib/prisma';



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
}