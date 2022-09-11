import { config } from "dotenv";

const envFile = config();

const apiToken = envFile.API_TOKEN || Deno.env.get("API_TOKEN");
if (!apiToken) {
  throw new Error(`Environment variable 'API_TOKEN' not found`);
}
export const API_TOKEN = apiToken;

const apiURL = envFile.API_URL || Deno.env.get("API_URL");
if (!apiURL) {
  throw new Error(`Environment variable 'API_URL' not found`);
}
export const API_URL = apiURL;
