// mutation {
//   login(
//     email: "sarah@graph.cool"
//     password: "graphql"
//   ) {
//     token
//     user {
//       id
//       name
//       links {
//         url
//         description
//       }
//     }
//   }
// }

function user(root, args, context, info) {
  return context.db.query.user({ where: { id: root.user.id } }, info)
}

module.exports = { user }
