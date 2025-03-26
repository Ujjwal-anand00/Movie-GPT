import OpenAI from "openai";
import { OPENAI_GPTKEY } from "./constants";

const client = new OpenAI({
  apiKey: OPENAI_GPTKEY,
  dangerouslyAllowBrowser: true,
});
export default client;
