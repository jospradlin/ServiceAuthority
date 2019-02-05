const environment = async (root, args, context) => {
    return context.prisma.environmentTenant({
        id: root.id
    }).environment();
};

const customer = async (root, args, context) => {
    return context.prisma.environmentTenant({
        id: root.id
    }).customer();
};

const attributes = async (root, args, context) => {
    return context.prisma.environmentTenant({
        id: root.id
    }).attributes()
};


module.exports = { environment, customer, attributes }
