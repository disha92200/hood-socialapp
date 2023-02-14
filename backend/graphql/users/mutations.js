const { GraphQLString, GraphQLNonNull } = require("graphql");

const UserModel = require("../../models/user-model");

const { UserType } = require("./type");

const userController = require("../../controllers/user-controller");

const addUser = {
  type: UserType,
  args: {
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    avatar: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent, args, context) {
    const userDetails = {
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      phone: args.phone,
      password: args.password,
      avatar: args.avatar,
    };
    const user = await userController.register(
      userDetails,
      context.req,
      context.res
    );
    console.log(user);
    return user;
  },
};

module.exports = {
  addUser,
};
