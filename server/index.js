const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
    Query: {
        service: (root, args, context) => {
            return context.prisma.service({ id: args.id })
        },
        services: (root, args, context) => {
            return context.prisma.services()
        }
    },
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
    Service: {
        dependentServices(root, args, context) {
            return context.prisma.service({
                id: root.id
            }).dependentServices()
        }
    },
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