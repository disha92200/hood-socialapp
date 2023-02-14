const {
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} = require("graphql");

const UserModel = require("../../models/user-model");

const { UserType } = require("./type");
const userController = require("../../controllers/user-controller");

const getAllUsers = {
  type: new GraphQLList(UserType),
  resolve(parent, args) {
    return UserModel.find({});
  },
};

const getUserById = {
  type: UserType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    try {
      const user = UserModel.findOne({ _id: args.id });
      return user;
    } catch (err) {
      throw new Error(
        JSON.stringify({
          code: 401,
          message: "No such User Found",
        })
      );
    }
  },
};

const userLogin = {
  type: UserType,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent, args, context) {
    const user = userController.login(
      { email: args.email, password: args.password },
      context.req,
      context.res
    );
    return user;
  },
};

module.exports = {
  getAllUsers,
  getUserById,
  userLogin,
};
