const { User } = require('../models');

const userController = {
    getAllUsers(req, res) {
        User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData =>res.json(dbUserData))
        .catch(err => {
            res.status(500).json(err)
        });

    },
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        
    }
}