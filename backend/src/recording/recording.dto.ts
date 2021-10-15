import { IsNotEmpty } from 'class-validator';

export class UploadRecordingDto {
  @IsNotEmpty()
  email: string;
}
