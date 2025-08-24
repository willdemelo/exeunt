import { prisma } from '@/lib/prisma';
import font from '@/styles/fonts';

export default async function SessionsPage({ params }: { params: { universeId: string, itemId: string } }) {
  const { universeId, itemId } = params;
  const session = await prisma.sessions.findUnique({
    where: { universeId: universeId, id: itemId },
  });

  return (
    <div>
      <h1 className={font({ size: 'md' })}>{session?.title}</h1>
      <p className={font({ size: 'sm' })}>{session?.content.description}</p>
    </div>
  );
}