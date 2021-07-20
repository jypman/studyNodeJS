module.exports = (sequelize, DataTypes) => {
    let boards = sequelize.define('boards', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(255),
        },
        content: {
            type: DataTypes.TEXT,
        }
        // userId 컬럼은 여기서 따로 정의하지 않아도 boards.associate에서 userId를 정의하였기에 자동생성된다.
    }, {});
    boards.associate = models => {
        // boards.belongsTo()의 첫번째 인자에서 user테이블과 관계를 정의하였기에 두번째 인자는 생략해도 무관하다.
        // foreignKey는 n에 해당하는 boards의 특정 칼럼을 가리킨다.
        // targetKey는 foreignKey가 user의 어떤 키를 가리키는지 알려준다.
        boards.belongsTo(models.users, {foreignKey : 'userId', targetKey : 'id'});
    };
    return boards;
}