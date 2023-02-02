import app from "./src/app.js";
import routes from "./src/routes/index.js";

const port = process.env.PORT || "3333";

app.listen(port, () =>
  console.log(`Server online, acesse "http://localhost:${port}"`)
);
