import ProductModel from '../models/products';

export default new class ProductService {
    add(data) {
        return ProductModel.create(data);
    };
    find(filter) {
        return ProductModel.findOne({ where: filter });
    };
    listAll(filter) {
        return ProductModel.findAll({ where: filter });
    };
    update(filter, change) {
        return ProductModel.update(change, { where: filter });
    };
    delete(filter) {
        return ProductModel.destroy({ where: filter });
    }
}