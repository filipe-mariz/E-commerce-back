export default (sequelize, DataTypes) => {
    const store = sequelize.define('store', {
        id: DataTypes.INTEGER,
        name: DataTypes.STRING(255),
        description: DataTypes.STRING(255),
        user_id: DataTypes.INTEGER
    })

    return store;
}