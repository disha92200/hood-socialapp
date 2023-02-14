const { GraphQLSchema, GraphQLObjectType } = require("graphql");

const { PostMutation } = require("./mutations");
const { PostQuery } = require("./queries");
const { getAllUsers, getUserById, userLogin } = require("./users/queries");
const { addUser } = require("./users/mutations");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers,
    getUserById,
    userLogin,
    posts: PostQuery.posts,
    post: PostQuery.post,
  },
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    addUser,
    addPost: PostMutation.addPost,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
