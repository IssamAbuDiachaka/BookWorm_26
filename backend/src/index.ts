import "dotenv/config";
import { app } from "./app.js";
import { env } from "./config/env.js";

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`[Bookworm] Backend running at http://localhost:${PORT}`);
});
