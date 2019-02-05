const contacts = async (root, args, context) => {
    return context.prisma.customer({
        id: root.id
    }).contacts();
};

const tenants = async (root, args, context) => {
    return context.prisma.customer({
        id: root.id
    }).tenants()
};

module.exports = { contacts, tenants }
