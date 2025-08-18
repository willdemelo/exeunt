/*
  Warnings:

  - You are about to drop the column `title` on the `Concepts` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Histories` table. All the data in the column will be lost.
  - You are about to drop the column `historyId` on the `Timelines` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[universeId]` on the table `Personas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[universeId]` on the table `Sessions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[personaId]` on the table `Sessions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[timelineId]` on the table `Sessions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `universeId` to the `Personas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timelineId` to the `Sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `universeId` to the `Timelines` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Timelines" DROP CONSTRAINT "Timelines_historyId_fkey";

-- DropIndex
DROP INDEX "public"."Timelines_historyId_key";

-- AlterTable
ALTER TABLE "public"."Concepts" DROP COLUMN "title";

-- AlterTable
ALTER TABLE "public"."Histories" DROP COLUMN "title";

-- AlterTable
ALTER TABLE "public"."Personas" ADD COLUMN     "universeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Sessions" ADD COLUMN     "timelineId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Timelines" DROP COLUMN "historyId",
ADD COLUMN     "universeId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Personas_universeId_key" ON "public"."Personas"("universeId");

-- CreateIndex
CREATE UNIQUE INDEX "Sessions_universeId_key" ON "public"."Sessions"("universeId");

-- CreateIndex
CREATE UNIQUE INDEX "Sessions_personaId_key" ON "public"."Sessions"("personaId");

-- CreateIndex
CREATE UNIQUE INDEX "Sessions_timelineId_key" ON "public"."Sessions"("timelineId");

-- AddForeignKey
ALTER TABLE "public"."Personas" ADD CONSTRAINT "Personas_universeId_fkey" FOREIGN KEY ("universeId") REFERENCES "public"."Universes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Timelines" ADD CONSTRAINT "Timelines_universeId_fkey" FOREIGN KEY ("universeId") REFERENCES "public"."Universes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Sessions" ADD CONSTRAINT "Sessions_timelineId_fkey" FOREIGN KEY ("timelineId") REFERENCES "public"."Timelines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
