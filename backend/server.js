const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const dbConnect = require("./database");
const authenticate = require("./authenticate");

dbConnect();

const PORT = process.env.PORT || 5500;
const app = express();
app.use(express.json({ limit: "5mb" }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/graphql", authenticate);

app.use("/graphql", (req, res) => {
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: { req, res },
    customFormatErrorFn: (err) => {
      try {
        const error = JSON.parse(err.message);
        return error;
      } catch {
        return err;
      }
    },
  })(req, res);
});

app.listen(PORT, () => {
  console.log("listenting at port ", PORT);
});
