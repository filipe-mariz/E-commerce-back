import HandleService from './base';
import ProductModel from '../models/products';

class ProductService extends HandleService {
    constructor () {
        super();
    };

    add (data) {
        try {
            return ProductModel.create(data);
        } catch (error) {
            return this.error;
        }
    };

    find (filter) {
        try {
            return ProductModel.findOne({
                where: {
                    id: filter.id
                }
            });
        } catch (error) {
            return this.error;
        };
    };

    listAll (filter) {
        try {
            return ProductModel.findAll(filter);
        } catch (error) {
            return this.error;
        }
    };

    update (change, filter) {
        try {
            return ProductModel.update(change, {
                where: {
                    id: filter.id
                }
            });
        } catch (error) {
            return this.error;
        }
    };

    delete (filter) {
        try {
            return ProductModel.destroy({ where: filter });
        } catch (error) {
            return this.error;
        }
    }
}

export default ProductService;