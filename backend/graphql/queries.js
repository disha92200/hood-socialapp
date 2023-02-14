const { GraphQLID, GraphQLNonNull, GraphQLList } = require("graphql");
const PostModel = require("../models/post-model");

const { PostType } = require("./types");

const PostQuery = {
  posts: {
    type: new GraphQLList(PostType),
    resolve(parent, args) {
      return PostModel.find({});
    },
  },
  post: {
    type: PostType,
    args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    resolve(parent, args) {
      return PostModel.findById(args.id);
    },
  },
};

module.exports = {
  PostQuery,
};
