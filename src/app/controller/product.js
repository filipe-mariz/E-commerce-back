import BaseController from './base';
import ProductService from '../services/products';

class Product extends BaseController {
    constructor () {
        super();

        this.productService = new ProductService();
    };

    async createAction (req, res) {
        try {
            const response = await this.productService.add(req.body);

            this.success(res, response);
        } catch (error) {
            this.error(res, error);
        };
    };

    async indexAction (req, res) {
        try {
            const filter = {
                id: req.params.id
            }

            const action = filter.id ? 'find' : 'listAll'
            const filtered = filter = filter.id ? filter : delete filter.id

            const response = await this.productService[action](filtered);

            this.success(res, response);
        } catch (error) {
            this.error(res, error);
        }
    }

    async updateAction (req, res) {
        try {
            const changes = req.data;
            const filter = {
                id: req.params.id
            }

            const response = await this.productService.update(changes, filter);

            this.success(res, response);
        } catch (error) {
            this.error(res, error);
        }
    }

    async deleteAction (req, res) {
        try {
            const filter = {
                id: req.params.id
            }

            const response = await this.productService.delete(filter);

            this.success(res, response);
        } catch (error) {
            this.error(res, error);
        };
    }
};

export default Product;