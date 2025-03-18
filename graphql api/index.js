const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();
const PORT = 3000;

app.use("/graphql", graphqlHTTP({
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});