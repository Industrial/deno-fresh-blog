import { Options } from "$fresh/plugins/twind.ts";
import daisyui from "daisyui";

const options: Options = {
  selfURL: import.meta.url,
  plugins: [
    daisyui,
  ],
};

export default options;
