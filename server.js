import app from "./express/api.js";

const port = process.env.PORT || "3333";

app.listen(port, () =>
  console.log(`Server online, acesse "http://localhost:${port}"`)
);
