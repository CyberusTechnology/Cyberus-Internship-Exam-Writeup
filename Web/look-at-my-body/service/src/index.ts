import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { cors } from "@elysiajs/cors";
import { staticPlugin } from "@elysiajs/static";

import { graphqlRoute } from "./app/graphql";
import { pagesRoute } from "./app/pages";
import { jwtConfig } from "./utils/config";

const app = new Elysia({
  serve: {
    hostname: "0.0.0.0",
  },
})
  .use(jwtConfig)
  .use(
    cors({
      origin: "*",
    })
  )
  .use(staticPlugin())
  .use(html())
  .use(graphqlRoute)
  .use(pagesRoute)
  .listen(5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
