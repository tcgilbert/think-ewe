"use strict";
const bcrypt = require("bcrypt");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user.hasMany(models.book_post);
    }
  }
  user.init(
    {
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            msg: "Invalid email",
          },
        },
      },
      fullname: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [1, 99],
            msg: "Name must be at least one character",
          },
        },
      },
      username: {
        type: DataTypes.STRING,
        unique: {
          msg: "Username not availible",
        },
        validate: {
          len: {
            args: [1, 99],
            msg: "Username must be at least one character",
          },
        },
      },
      password: DataTypes.STRING,
      bio: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "user",
    }
  );

  user.addHook("beforeCreate", async (pendingUser) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pendingUser.password, salt);
    pendingUser.password = hash;
  });

  user.prototype.validPassword = function(passwordTyped) {
    let correctPassword = bcrypt.compareSync(passwordTyped, this.password);
    // return true or false based on correct password or not
    return correctPassword;
  }
  return user;
};
