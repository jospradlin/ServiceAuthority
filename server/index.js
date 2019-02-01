const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const Query = require('./resolvers/Query');
const Service = require('./resolvers/Service');
const AuthPayload = require('./resolvers/AuthPayload');

const resolvers = {
    Query,
    Mutation: {
        // 2
        createService: (root, args, context) => {
            return context.prisma.createService(
                { 
                    name: args.name,
                    code: args.code,
                    description: args.description,
                    status: args.status,
                    type: args.type,
                    version: args.version,
                    canBeRemoved: args.canBeRemoved
                }
            )
        },
        removeServiceById: (root, args, context) => {
            return context.prisma.deleteService(
                {
                    id: args.id
                }
            )
        
        },

    },
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