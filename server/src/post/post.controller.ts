import * as express from 'express';
//
import PostNotFound from '../exceptions/postNotfound.exception';
import Controller from '../interfaces/controller.interface';
import RequestWithUser from '../interfaces/requestWithUser.interface';
import auth from '../middleware/auth.middleware';
import validationMiddleware from '../middleware/validation.middleware';
import PostDto from '../dto/post.dto';
import Post from '../interfaces/post.interface';
import postModel from '../models/post.model';

class PostController implements Controller {
  public path = '/posts';
  public router = express.Router();
  public post = postModel;

  constructor() {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(this.path, this.getAllPost);
    this.router.get(`${this.path}/:id`, this.getPostById);
    this.router
      .all(`${this.path}/*`, auth)
      .post(this.path, validationMiddleware(PostDto), this.createPost);
  }

  private getAllPost = async(req: express.Request, res: express.Response) => {
    const posts = await this.post.find();
    res.send(posts);
  }

  private getPostById = async(req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id;
    const post = await this.post.findById(id);
    if (post) {
      res.send(post);
    } else {
      next(new PostNotFound(id));
    }
  }

  private createPost = async (req: express.Request, res: express.Response) => {
    const postData: PostDto = req.body;
    const createdPost = new this.post({
      ...postData
    });
    const savedPost = await createdPost.save();
    res.send(savedPost);
  }
}

export default PostController;