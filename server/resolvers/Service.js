const dependentServices = async (root, args, context) => {
    return context.prisma.service({
        id: root.id
    }).dependentServices()
};

const environments = async (root, args, context) => {
    return context.prisma.service({
        id: root.id
    }).environments()
};

const owner = async (root, args, context) => {
    return context.prisma.service({
        id: root.id
    }).owner()
};

const tenant = async (root, args, context) => {
    return context.prisma.service({
        id: root.id
    }).tenant()
};

module.exports = { dependentServices, environments, owner, tenant }
