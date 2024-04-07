-- AlterTable
CREATE SEQUENCE book_id_seq;
ALTER TABLE "Book" ALTER COLUMN "id" SET DEFAULT nextval('book_id_seq'),
ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;
ALTER SEQUENCE book_id_seq OWNED BY "Book"."id";
