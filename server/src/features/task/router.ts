import { router } from "../../trpc";
import { findTask, createTask, deleteTask } from "./procedures";

export const taskRouter = router({
  findTask,
  createTask,
  deleteTask,
});
