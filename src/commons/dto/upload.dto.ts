
import { IsDefined } from 'class-validator';

export class ImageDto {
  @IsDefined({ message: 'Image is required' })
  image: { buffer: Buffer, originalname: string, mimetype: string };
}
