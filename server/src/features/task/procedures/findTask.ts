import { publicProcedure } from "../../../trpc";
import prisma from "../../../clients/prisma";

export const findTask = publicProcedure.query(async () => {
  const tasks = await prisma.task.findMany();

  return tasks;
});
