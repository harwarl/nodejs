const express = require('express');
const path = require('path');
const { buildSchema } = require('graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { graphqlHTTP } = require('express-graphql');
// const SchemaText = `
// type Query{
//     description: String
//     price: Float
// }
// `;

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolver.js'))

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray
});

// const root = {
//     products: require('./product/product.model').getProducts(),
//     orders: require('./order/order.model').getOrders()
// }  Not needed anymore since data has been passed in resolvers

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true
}))

app.listen(3000, () => {
    console.log('Running GraphQl server 3000');
})