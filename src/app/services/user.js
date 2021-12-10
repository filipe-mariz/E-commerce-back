import UserModel  from '../models/user';

export default new  class UserService {
    add (addHospital) {
        return UserModel.create(addHospital)
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
