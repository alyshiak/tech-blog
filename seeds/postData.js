const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "hello1",
    "postContent": "Hello world 1",
    "userId": 1
  },
  {
    "postTitle": "hello2",
    "postContent": "Hello world 2",
    "userId": 2
  },
  {
    "postTitle": "hello3",
    "postContent": "Hello world 3",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;