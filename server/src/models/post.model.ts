import * as mongoose from 'mongoose';
import Post from '../interfaces/post.interface';

const postSchema = new mongoose.Schema({
  title: String,
  content: String
});

const postModel = mongoose.model<Post & mongoose.Document>('Post', postSchema);

export default postModel;