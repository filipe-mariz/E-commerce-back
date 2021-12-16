import ProductSrvice from '../services/products';
import HandleApi from '../../errors/handle-api';

export default new class ProductController {
    async createAction (req, res) {
        try {
            const response = await ProductSrvice.add(...req.body);

            HandleApi.handleResponse(res, response);
        } catch (error) {
            HandleApi.handleError(req, res, error);
        };
    };

    async indexAction (req, res) {
        try {
            const filter = req.filter.id;
            const action = filter ? 'find' : 'listAll'

            const response = await ProductSrvice[action](filter);

            HandleApi.handleResponse(res, response);
        } catch (error) {
            HandleApi.handleError(req, res, error);
        }
    };

    async updateAction (req, res) {
        try {
            const changes = req.data;
            const filter = req.filter.id;

            const response = await ProductSrvice.update(changes, filter);

            HandleApi.handleResponse(res, response);
        } catch (error) {
            HandleApi.handleError(req, res, error);
        }
    };

    async deleteAction (req, res) {
        try {
            const filter = req.filter.id;

            const response = await ProductSrvice.delete(filter);

            HandleApi.handleResponse(res, response);
        } catch (error) {
            HandleApi.handleError(req, res, error);
        };
    };
};