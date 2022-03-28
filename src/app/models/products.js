export default (sequelize, DataTypes) => {
    const Product = sequelize.define('products',
        {
            id: DataTypes.INTEGER,
            product_name: DataTypes.STRING(255),
            description: DataTypes.STRING(255),
            category: DataTypes.STRING(255),
            price: DataTypes.STRING(255),
            image_link: DataTypes.STRING(255)
        });

    return Product;
};


// import BaseModel from './base';
//  class Product extends BaseModel {
// 	static load(sequelize) {
// 		return super.init({}, {
// 			timestamps: true,
// 			sequelize: sequelize,
// 			modelName: 'product',
// 			tableName: 'pro',
// 			createdAt: 'created_at',
// 			updatedAt: 'updated_at'
// 		});
// 	}
// }

// export default Product;