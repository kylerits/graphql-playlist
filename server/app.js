const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');

const app = express();


// connect to mlab database
mongoose.connect(
  "mongodb://crash:rH!no331@ds237409.mlab.com:37409/gql-crash"
);
mongoose.connection.once('open', () => {
    console.log("Database is connected.");
});
// end db connection


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening on port 4000');
});