
const user = async (root, args, context) => {
  return context.prisma.user({
    id: root.user.id
  })
};


module.exports = { user }
