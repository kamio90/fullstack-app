import {IsString} from 'class-validator';

class PostDto {
  @IsString()
  public title: string;
  
  @IsString()
  public content: string;
}

export default PostDto;