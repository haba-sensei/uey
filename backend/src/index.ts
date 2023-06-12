import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import productoSchema from './schema/productoSchema';
import productoResolvers from './resolvers/productoResolvers';

const app = express();
const port = 4000;

async function startServer() {
    const server = new ApolloServer({
        typeDefs: productoSchema,
        resolvers: productoResolvers,
    });
    await server.start();
    app.use(
        cors(),
        bodyParser.json(),
        expressMiddleware(server),
    );
}
startServer();

app.listen(port, () => {
    console.log(`server running : http://localhost:${port}`);
});
