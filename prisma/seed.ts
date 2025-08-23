import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  await prisma.universes.create({
    data: {
      title: 'Zeta Gundam RPG',
      content: {
        description: 'Immerse yourself in the world of Mobile SuitZeta Gundam, a high-stakes, high-action role-playing game set in UC 0083. Fight for the AEUG, the Titans, or Neo Zeon as a character from the show, or create your own.',
      }
    },
  });

  console.log('Universe created: Zeta Gundam RPG');

  await prisma.universes.create({
    data: {
      title: 'Default Fantasy RPG',
      content: {
        description: 'Default Fantasy RPG is a standard role-playing game.',
      }
    },
  });

  console.log('Universe created: Default Fantasy RPG');

  await prisma.universes.create({
    data: {
      title: 'Default Slice-of-Life RPG',
      content: {
        description: 'Default Slice-of-Life RPG is a standard role-playing game.',
      },
    },
  });

  console.log('Universe created: Default Slice-of-Life RPG');

  const defaultUniverse = await prisma.universes.findFirst({
    where: {
      title: 'Zeta Gundam RPG',
    },
  });

  if (!defaultUniverse) {
    throw new Error('Default universe not found');
  }

  await prisma.personas.create({
    data: {
      title: 'Default Persona',
      content: {
        description: '',
      },
      universeId: defaultUniverse.id,
    },
  });

  console.log('Persona created: Default Persona');

  await prisma.timelines.create({
    data: {
      title: 'Default Timeline',
      content: {
        description: '',
        events: Object.fromEntries(new Map([
          ['Event 1', {
            description: 'Event 1',
            date: '2021-01-01',
            location: 'Location 1',
            participants: ['Participant 1', 'Participant 2'],
          }],
          ['Event 2', {
            description: 'Event 2',
            date: '2021-01-02',
            location: 'Location 2',
            participants: ['Participant 3', 'Participant 4'],
          }],
        ])),
      },
      universeId: defaultUniverse.id,
    },
  });

  console.log('Timeline created: Default Timeline');

  const defaultTimeline = await prisma.timelines.findFirst({
    where: {
      title: 'Default Timeline',
    },
  });

  const defaultPersona = await prisma.personas.findFirst({
    where: {
      title: 'Default Persona',
    },
  });

  if (!defaultPersona) {
    throw new Error('Default persona not found');
  }

  if (!defaultTimeline) {
    throw new Error('Default timeline not found');
  }

  await prisma.sessions.create({
    data: {
      title: 'AEUG vs Titans',
      content: {
        description: 'AEUG vs Titans is a session where the AEUG and the Titans fight each other.',
      },
      universeId: defaultUniverse.id,
      personaId: defaultPersona.id,
      timelineId: defaultTimeline.id,
    },
  });

  console.log('Session created: AEUG vs Titans');

  const defaultSession = await prisma.sessions.findFirst({
    where: {
      title: 'AEUG vs Titans',
    },
  });

  if (!defaultSession) {
    throw new Error('Default session not found');
  }

  await prisma.histories.create({
    data: {
      content: {
        history: {},
      },
      sessionId: defaultSession.id,
    },
  });

  console.log('History created');

  await prisma.concepts.create({
    data: {
      content: {
        concepts: Object.fromEntries(new Map([
          ['Mobile Suit', ' Mobile Suits are large mecha that are used in battle.'],
          ['Newtype', ' Newtypes are a special breed of humans that have special abilities.'],
          ['Space Colony', ' Space Colonies are large, cylindrical artificial habitats in space.'],
          ['UC', ' UC is the Universal Century, the time period in the Zeta Gundam universe.'],
          ['Gundam', ' Gundams are a type of Mobile Suit, with a reputation that their pilots are aces.'],
        ])),
      },
      universeId: defaultUniverse.id,
    },
  });

  console.log('Concepts created');

  await prisma.actors.create({
    data: {
      title: 'Kamille Bidan',
      content: {
        description: 'Kamille Bidan is a high school student turned into an AEUG pilot. He is the main character of Zeta Gundam.',
        // imageId:
        appearance: 'Kamille is a young man with a lean build and semi-long, blue hair. He is a high school student.',
        costumes: ['Casual Clothes (Kamille)', 'AEUG Fatigues','AEUG Normal Suit'],
    
        // Background and affiliations
        faction: 'AEUG',
        backstory: 'Kamille was a high school student at Green Noa 2. He is a champion in Judo, Homo Avis, and Petit Mobile Suit operation. He has a strained relationship with his father, Franklin Bidan.',
        // secrets:
    
        // Relationships
        relationships: Object.fromEntries(new Map([
          ['Quattro Bajeena', 'Mentor'],
          ['Bright Noa', 'Father Figure'],
          ['Four Murasame', 'Love interest'],
          ['Fa Yuiry', 'Childhood Friend'],
          ['Franklin Bidan', 'Absent Father'],
        ])),
    
        // Personality and psychology
        traits: ['Determined', 'Hotheaded', 'Impulsive', 'Naive'],
        values: ['Hatred against the Titans', ''],
        motivations: ['To protect his friends and family', 'To fight for the AEUG', 'To be a good pilot'],
        goals: ['To become a great pilot', 'To protect his friends and family', 'To fight for the AEUG'],
        strengths: ['Bravery', 'Determination', 'Leadership'],
        weaknesses: ['Stubbornness', 'Lack of patience', 'Overconfidence'],
        fears: ['Losing his friends and family', 'Being alone', 'Failure'],

        // Habits and mannerisms
        habits: ['Tends to be late to meetings', 'Tends to disobey orders if he thinks they are wrong', 'Tends to be impulsive'],
        mannerisms: ['Bites nails', 'Slouches'],
        speechExamples: Object.fromEntries(new Map([
          ['Angry', ["If you hadn't come here, I wouldnt have had to do that!", "How can you kill people so easily?!", "It's because of people like you that this fighting never ends!", "Begone from this world!"]],
          ['Sad', ["If you had just been a little kinder...", "People are dying... all at once...", "All we can do is kill people..."]],
          ['Happy', [""]],
          ['Fear', ["Don't come near me!"]],
          ['Disgust', ["I'll never accept that! This is garbage!"]],
          ['Surprise', [""]],
        ])),
        skills: Object.fromEntries(new Map([
          ['Judo', ['Advanced']],
          ['Homo Avis', ['Advanced']],
          ['Petit Mobile Suits', ['Advanced']],
          ['Mobile Suit Operation', ['Advanced']],
          ['Engineering', ['Intermediate']],
        ])),
        abilities: Object.fromEntries(new Map([
          ['Newtype', ['Advanced']],

        model: 'gpt-4o-mini',
        ])),
      },
      universeId: defaultUniverse?.id,
    },
  });

  console.log('Actor created: Kamille Bidan');

  console.log('Database seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });