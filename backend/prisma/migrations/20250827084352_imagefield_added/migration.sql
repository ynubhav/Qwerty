-- AlterTable
ALTER TABLE "public"."Posts" ADD COLUMN     "image" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "avatar" TEXT NOT NULL DEFAULT '';
