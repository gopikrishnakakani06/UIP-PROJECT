const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
   
    PostContent: {type: String},
    PostLikes: { type: Number},
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
  })

const Post = mongoose.model("post", postSchema);

async function createPost(User_id, PostContent){
  const newPost=await Post.create({
    User: User_id, 
    PostContent: PostContent,
    PostLikes: 0
  });
  return newPost;

}
async function updatePost(User_id, PostContent){
  const post = await post.updateOne({"UserName": User_id},  {$set: { PostContent: PostContent}});
  return post;

}

async function deletePost(User_id){
  await Post.deleteOne({"UserName": User_id});
}


async function getPost(User_id) {
  return await Post.findOne({"UserName": User_id});
}


module.exports = {createPost,updatePost, deletePost, getPost};