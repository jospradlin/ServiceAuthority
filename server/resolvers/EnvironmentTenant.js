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


module.exports = { environment, customer }
