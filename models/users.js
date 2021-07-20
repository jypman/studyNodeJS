module.exports = (sequelize, DataTypes) => {
    let users = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER(11),
            defaultValue: 0,
        }
    }, {});
    users.associate = models => {
        users.hasMany(models.boards, {foreignKey : 'userId'})
    }
    return users;
}