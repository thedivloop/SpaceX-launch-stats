const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');


const app = express();

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true, // Enables graphiql interface on URI /graphiql
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));