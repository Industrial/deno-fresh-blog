import { init, markdownToHTML as md } from "comrak";

await init();

export const markdownToHTML = md;
