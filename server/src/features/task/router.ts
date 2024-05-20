import { router } from "../../trpc";
import { findTask, createTask } from "./procedures";

export const taskRouter = router({
  findTask,
  createTask,
});
