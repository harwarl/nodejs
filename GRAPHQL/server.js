const express = require('express');
const path = require('path');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { ApolloServer }  = require('apollo-server-express');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolver.js'))

async function startApolloServer(){
    const app = express();
    
    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray
    });

    const server = new ApolloServer({
        schema: schema
    });

    await server.start();
    server.applyMiddleware({ app, path:'/graphql'});
    
    app.listen(3000, () => {
        console.log('Running GraphQl server 3000');
    })
}

startApolloServer();