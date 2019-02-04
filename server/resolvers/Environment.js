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


module.exports = { service, tenants }
