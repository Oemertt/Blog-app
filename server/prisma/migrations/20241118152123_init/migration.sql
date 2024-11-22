-- CreateTable
CREATE TABLE "blog" (
    "id" SERIAL NOT NULL,
    "titel" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "blog_pkey" PRIMARY KEY ("id")
);
