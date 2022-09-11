import { config as dotenvConfig } from "dotenv";
import { CodegenConfig } from "@graphql-codegen/cli";

dotenvConfig();

const API_URL = String(process.env.API_URL);
const API_TOKEN = String(process.env.API_TOKEN);

const config: CodegenConfig = {
  schema: [
    {
      [API_URL]: {
        headers: {
          Authorization: API_TOKEN,
        },
      },
    },
  ],
  // documents: ["./graphql/documents/**/*.graphql"],
  generates: {
    "./graphql/generated/client.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
    },
  },
};

export default config;
