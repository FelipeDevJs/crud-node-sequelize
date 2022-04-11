const User = require('./models/User')
const Comment = require('./models/Comment')

module.exports = async function Test(){
    const user = await User.findByPk(1, {include: Comment})
    const data = user.dataValues
    const comment = data.comments
    const datac = comment.dataValues
    console.log(comment)
}