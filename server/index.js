require('./config/config');
const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Service = require('./resolvers/Service');
const AuthPayload = require('./resolvers/AuthPayload');

const resolvers = {
    Query,
    Mutation,
    Service,
    AuthPayload,
    // },
    // // 3
    // Service: {
    //     id: (parent) => parent.id,
    //     description: (parent) => parent.description,
    //     url: (parent) => parent.url,
    // }
}

// 3
const server = new GraphQLServer({
    typeDefs: 'schema.graphql',
    resolvers,
    context: { prisma },

})
server.start(() => console.log(`Server is running on http://localhost:4000`))