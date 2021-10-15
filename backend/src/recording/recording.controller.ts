import {
  Controller,
  Logger,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { UploadRecordingDto } from './recording.dto';
import { RecordingService } from './recording.service';

@Controller('recording')
export class RecordingController {
  constructor(
    private readonly recordingService: RecordingService,
    private readonly logger: Logger,
  ) {}

  @Post('upload/:email')
  @UseInterceptors(FileInterceptor('voice-recording'))
  uploadFile(
    @Param() params: UploadRecordingDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    this.logger.log('Received file from: ', params.email);
    return this.recordingService.handleRecording(file);
  }
}
