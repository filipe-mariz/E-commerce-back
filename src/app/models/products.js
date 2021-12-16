export default new class ProductModel {
    Product (sequelize, DataTypes) {
        const Product = sequelize.define(
            'products',
            {
                id: DataTypes.INTEGER,
                product_name: DataTypes.STRING(255),
                description: DataTypes.STRING(255),
                category: DataTypes.STRING(255),
                price: DataTypes.STRING(255),
                image_link: DataTypes.STRING(255)
            })
        return Product
    }
};
