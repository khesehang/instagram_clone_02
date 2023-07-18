const UserModel = require('../../model/user_model');

const Register = async (req, res, next) => {
    const newUser = new UserModel(req.body)
    try {
        await newUser.save()
        res.json(newUser)
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    Register
}