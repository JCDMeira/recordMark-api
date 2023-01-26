import app from "./src/app.js";
import routes from "./src/routes/index.js";

app.use("/.netlify/functions/server", routes); // path must route to lambda

const port = process.env.PORT || "3333";

app.listen(port, () =>
  console.log(`Server online, acesse "http://localhost:${port}"`)
);
