import { type Plugin } from "https://deno.land/x/fresh@1.1.1/server.ts?s=Plugin";

import createEmotionServer from "@emotion/server/create-instance";

import { cache } from "#/lib/emotion.ts";

export function emotionPlugin(): Plugin {
  return {
    name: "emotion",
    render(context) {
      const res = context.render();
      const emotionServer = createEmotionServer(cache);
      const { css } = emotionServer.extractCritical(res.htmlText);

      return {
        scripts: [],
        styles: [
          {
            id: "test",
            cssText: css,
          },
        ],
      };
    },
  };
}
