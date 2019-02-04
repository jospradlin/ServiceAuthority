const customer = async (root, args, context) => {
    return context.prisma.customerContact({
        id: root.id
    }).customer();
};

module.exports = { customer }
