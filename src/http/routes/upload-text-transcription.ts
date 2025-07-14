import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { z } from "zod/v4";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";
import { generateEmbeddings } from "../../services/gemini.ts";

export const uploadTextTranscriptionRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    "/rooms/:roomId/text",
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
        body: z.object({
          transcription: z.string().min(10, "Texto obrigatório"),
        }),
      },
    },
    async (request, reply) => {
      const { roomId } = request.params;
      const { transcription } = request.body;

      const embeddings = await generateEmbeddings(transcription);

      const result = await db
        .insert(schema.audioChunks)
        .values({
          roomId,
          transcription,
          embeddings,
        })
        .returning();

      const chunk = result[0];

      if (!chunk) {
        throw new Error("Erro ao salvar transcrição de texto");
      }

      return reply.status(201).send({ chunkId: chunk.id });
    }
  );
};
