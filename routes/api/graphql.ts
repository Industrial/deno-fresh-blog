import { HandlerContext } from "$fresh/server.ts";

import { API_TOKEN } from "#/lib/env.ts";

export const handler = (req: Request, ctx: HandlerContext): Response => {
  console.log("req", req);
  console.log("ctx", ctx);

  return new Response("derptydoo");
};
