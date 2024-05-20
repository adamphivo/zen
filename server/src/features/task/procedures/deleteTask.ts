import { z } from "zod";
import { publicProcedure } from "../../../trpc";
import prisma from "../../../clients/prisma";

export const deleteTask = publicProcedure
  .input(z.number())
  .mutation(async (req) => {
    const { input } = req;

    const deleted = await prisma.task.delete({
      where: {
        id: input,
      },
    });

    return deleted;
  });
