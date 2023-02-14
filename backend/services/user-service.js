const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");

class UserService {
  async createUser(userDetails) {
    console.log(userDetails);
    return await UserModel.create(userDetails);
  }
  async getAllUsers() {
    return await UserModel.find({});
  }
  async getUserById(userId) {
    return await UserModel.findById(userId);
  }
  async getUserByEmailPassword({ email, password }) {
    return await UserModel.findOne({ email, password });
  }
  async getUserByEmail({ email }) {
    return await UserModel.findOne({ email });
  }
  async generateHashPassword({ password }) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
  async verifyHashPassword({ password, hashPassword }) {
    return await bcrypt.compare(password, hashPassword);
  }
}

module.exports = new UserService();
