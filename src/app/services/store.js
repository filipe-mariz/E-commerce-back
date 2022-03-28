import Stores from '../models/store';

class Store {
    create () {
        return Stores.create();
    }

    findOne (filter) {
        return Stores.findOne({ where: filter })
    };

    findAll(filter) {
        return Stores.findAll({ where: filter })
    };

    update (changes, filter) {
        return Stores.update(changes, { where: filter });
    };

    delete (filter) {
        return Stores.delete({ where: filter })
    }
}

export default new Store();