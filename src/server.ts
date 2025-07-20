import { serve } from "@hono/node-server";
import app from "./index.js";

const port = parseInt(process.env.PORT || "3000");

console.log(`Starting server on port ${port}`);

serve({
  fetch: app.fetch,
  port
}); 