import cors from "cors";
import express from "express";
import morgan from "morgan";
import * as trpcExpress from "@trpc/server/adapters/express";

import { appRouter } from "./router";
import { createContext } from "./context";

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(3000, () => {
  console.log("App listening on port 3000 🚀");
});

export type AppRouter = typeof appRouter;
