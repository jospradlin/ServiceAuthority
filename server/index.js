require('./config/config');
const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Service = require('./resolvers/Service');
const Environment = require('./resolvers/Environment');
const EnvironmentTenant = require('./resolvers/EnvironmentTenant');
const Customer = require('./resolvers/Customer');
const CustomerContact = require('./resolvers/CustomerContact');
const AuthPayload = require('./resolvers/AuthPayload');

const resolvers = {
    Query,
    Mutation,
    AuthPayload,
    Service,
    Environment,
    Customer,
    CustomerContact,
    EnvironmentTenant,
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
    context: req => ({
        ...req,
        prisma
    })

})
server.start(() => console.log(`Server is running on http://localhost:4000`))