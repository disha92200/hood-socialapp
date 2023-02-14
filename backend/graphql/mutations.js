const { GraphQLID, GraphQLString, GraphQLNonNull } = require("graphql");
const PostModel = require("../models/post-model");

const { PostType } = require("./types");

const PostMutation = {
  addPost: {
    type: PostType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLString) },
      userId: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve(parent, args) {
      const post = new PostModel({
        name: args.name,
        description: args.description,
        userId: args.userId,
      });
      post.save();
      return post;
    },
  },
};

module.exports = {
  PostMutation,
};
