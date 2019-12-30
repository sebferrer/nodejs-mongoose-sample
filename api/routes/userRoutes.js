'use strict';
module.exports = function (app) {
    let userController = require('../controllers/userController');

    app.route('/api/users')
        .get(userController.listUsers)
        .post(userController.createUser);

    app.route('/api/tasks/:taskId')
        .get(userController.readUser)
        .put(userController.updateUser)
        .delete(userController.deleteUser);
        
};