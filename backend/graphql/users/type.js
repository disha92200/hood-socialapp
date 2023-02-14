const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    phone: { type: GraphQLString },
    email: { type: GraphQLString },
    avatar: { type: GraphQLString },
    createdAt: { type: GraphQLString },
  }),
});

module.exports = { UserType };
