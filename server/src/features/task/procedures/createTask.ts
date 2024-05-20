import { z } from "zod";
import { publicProcedure } from "../../../trpc";
import prisma from "../../../clients/prisma";

export const createTask = publicProcedure
  .input(
    z.object({ title: z.string().min(1), description: z.string().optional() })
  )
  .mutation(async (req) => {
    const { input } = req;

    const created = await prisma.task.create({
      data: {
        title: input.title,
        description: input.description,
      },
    });

    return created;
  });
