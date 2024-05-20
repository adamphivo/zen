import prisma from "../../../clients/prisma";

import { publicProcedure } from "../../../trpc";

export const findTask = publicProcedure.query(async () => {
  const tasks = await prisma.task.findMany();

  return tasks;
});
