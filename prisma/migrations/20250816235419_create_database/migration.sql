-- CreateTable
CREATE TABLE "public"."Universes" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Universes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Personas" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Personas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Sessions" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "universeId" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,

    CONSTRAINT "Sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Concepts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "universeId" TEXT NOT NULL,

    CONSTRAINT "Concepts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Tones" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "universeId" TEXT NOT NULL,

    CONSTRAINT "Tones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Stages" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "universeId" TEXT NOT NULL,

    CONSTRAINT "Stages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SetPieces" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "universeId" TEXT NOT NULL,

    CONSTRAINT "SetPieces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Props" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "universeId" TEXT NOT NULL,

    CONSTRAINT "Props_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Costumes" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "universeId" TEXT NOT NULL,

    CONSTRAINT "Costumes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Actors" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "universeId" TEXT NOT NULL,

    CONSTRAINT "Actors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Factions" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "universeId" TEXT NOT NULL,

    CONSTRAINT "Factions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Soundtracks" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "universeId" TEXT NOT NULL,

    CONSTRAINT "Soundtracks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Histories" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sessionId" TEXT NOT NULL,

    CONSTRAINT "Histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Timelines" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "historyId" TEXT NOT NULL,

    CONSTRAINT "Timelines_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Histories_sessionId_key" ON "public"."Histories"("sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "Timelines_historyId_key" ON "public"."Timelines"("historyId");

-- AddForeignKey
ALTER TABLE "public"."Sessions" ADD CONSTRAINT "Sessions_universeId_fkey" FOREIGN KEY ("universeId") REFERENCES "public"."Universes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Sessions" ADD CONSTRAINT "Sessions_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "public"."Personas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Concepts" ADD CONSTRAINT "Concepts_universeId_fkey" FOREIGN KEY ("universeId") REFERENCES "public"."Universes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Tones" ADD CONSTRAINT "Tones_universeId_fkey" FOREIGN KEY ("universeId") REFERENCES "public"."Universes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Stages" ADD CONSTRAINT "Stages_universeId_fkey" FOREIGN KEY ("universeId") REFERENCES "public"."Universes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SetPieces" ADD CONSTRAINT "SetPieces_universeId_fkey" FOREIGN KEY ("universeId") REFERENCES "public"."Universes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Props" ADD CONSTRAINT "Props_universeId_fkey" FOREIGN KEY ("universeId") REFERENCES "public"."Universes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Costumes" ADD CONSTRAINT "Costumes_universeId_fkey" FOREIGN KEY ("universeId") REFERENCES "public"."Universes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Actors" ADD CONSTRAINT "Actors_universeId_fkey" FOREIGN KEY ("universeId") REFERENCES "public"."Universes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Factions" ADD CONSTRAINT "Factions_universeId_fkey" FOREIGN KEY ("universeId") REFERENCES "public"."Universes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Soundtracks" ADD CONSTRAINT "Soundtracks_universeId_fkey" FOREIGN KEY ("universeId") REFERENCES "public"."Universes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Histories" ADD CONSTRAINT "Histories_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."Sessions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Timelines" ADD CONSTRAINT "Timelines_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "public"."Histories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
