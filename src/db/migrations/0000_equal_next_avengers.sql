CREATE TYPE "public"."status" AS ENUM('open', 'paid', 'void', 'uncollectible');--> statement-breakpoint
CREATE TABLE "invoices" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"value" integer NOT NULL,
	"description" text NOT NULL,
	"status" "status" NOT NULL
);
