const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");
const UserModel = require("../models/user-model");
const { UserType } = require("./users/type");

const PostType = new GraphQLObjectType({
  name: "PostType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent, args) {
        return UserModel.findById(parent.userId);
      },
    },
  }),
});

module.exports = { UserType, PostType };
