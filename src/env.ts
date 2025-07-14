import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number(),
  DATABASE_URL: z.string().url().startsWith("postgresql://"),
  GENAI_API_KEY: z.string(),
});

export const env = envSchema.parse(process.env);
