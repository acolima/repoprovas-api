CREATE TABLE "users"(
  "id" SERIAL NOT NULL PRIMARY KEY,
  "email" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL
);

CREATE TABLE "terms"(
  "id" SERIAL NOT NULL PRIMARY KEY,
  "number" INTEGER NOT NULL UNIQUE
);

CREATE TABLE "disciplines"(
  "id" SERIAL NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  "termId" INTEGER NOT NULL REFERENCES "terms"(id)
);

CREATE TABLE "teachers"(
  "id" SERIAL NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE
);

CREATE TABLE "categories"(
  "id" SERIAL NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE
);

CREATE TABLE "teachersDisciplines"(
  "id" SERIAL NOT NULL PRIMARY KEY,
  "teacherId" INTEGER NOT NULL REFERENCES "teachers"(id),
  "disciplineId" INTEGER NOT NULL REFERENCES "disciplines"(id)
);

CREATE TABLE "tests"(
  "id" SERIAL NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "pdfUrl" TEXT NOT NULL,
  "categoryId" INTEGER NOT NULL REFERENCES "categories"(id),
  "teacherDisciplineId" INTEGER NOT NULL REFERENCES "teachersDisciplines"(id)
);

CREATE TABLE "sessions"(
  "id" SERIAL NOT NULL PRIMARY KEY,
  "token" TEXT NOT NULL,
  "userId" INTEGER NOT NULL REFERENCES "users"(id)
);