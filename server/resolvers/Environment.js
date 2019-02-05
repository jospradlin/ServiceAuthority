const service = async (root, args, context) => {
    return context.prisma.environment({
        id: root.id
    }).service();
};

const tenants = async (root, args, context) => {
    return context.prisma.environment({
        id: root.id
    }).tenants();
};

const components = async (root, args, context) => {
    return context.prisma.environment({
        id: root.id
    }).components()
};


module.exports = { service, tenants, components }
