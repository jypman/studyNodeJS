'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // 예시
      this.hasMany(models.Persons, {foreignKey : 'userId'})
    }
    // 외부의 init메소드를 class안에서 다음과 같이 사용가능
    // static init(sequelize, DataTypes) {
    //   return super.init(
    //       {
    //         firstName: DataTypes.STRING,
    //         lastName: DataTypes.STRING,
    //         email: DataTypes.STRING
    //       }, {
    //         sequelize,
    //         modelName: 'User',
    //       }
    //   )
    // }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
    // DataTypes 중 DataTypes.BOOLEAN도 있다는 것 참고
  }, {
    sequelize,
    modelName: 'User',
    // 다음과 같은 기타 옵션도 가능
    // timestamps: true, // createdAt과 updatedAt 자동생성
    // createdAt: false, // createdAt만 자동생성되지 않도록 함
    // freezeTableName: true // 테이블 이름을 모델 이름과 동일하게 적용
  });
  return User;
};