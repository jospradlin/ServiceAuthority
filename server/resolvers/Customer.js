const contacts = async (root, args, context) => {
    return context.prisma.customer({
        id: root.id
    }).contacts();
};

module.exports = { contacts }
