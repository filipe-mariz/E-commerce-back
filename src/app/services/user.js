import {UserModel}  from '../models/user';

export default new class UserService {
    add (data) {
        return UserModel.create(data)
    }

    read (filter) {
        return UserModel.findOne({ where: filter })
    };

    update (filter, changes) {
        return UserModel.update(changes, { where: filter });
    };

    delete (filter) {
        return UserModel.destroy({ where: filter });
    }
}
