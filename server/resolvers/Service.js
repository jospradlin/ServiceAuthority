const dependentServices = async (root, args, context) => {
    return context.prisma.service({
        id: root.id
    }).dependentServices()
};

module.exports = { dependentServices }
