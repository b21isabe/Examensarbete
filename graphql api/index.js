require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

const app = express();
const PORT = 3000;

app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});