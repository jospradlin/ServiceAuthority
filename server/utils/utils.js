const jwt = require('jsonwebtoken')
//const APP_SECRET = 'GraphQL-is-aw3some'

function getUserId(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    console.log(token);
    const { userId, exp } = jwt.verify(token, process.env.JWT_SECRET);
    const current_time = Date.now().valueOf() / 1000;
    if (exp < current_time) {
      throw new Error('Not authenticated')
    }
    return userId
  }

  throw new Error('Not authenticated')
}

module.exports = {
  // APP_SECRET,
  getUserId,
}
