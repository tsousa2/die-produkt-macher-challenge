import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class RecordingService {
  constructor(private logger: Logger) {}

  async handleRecording(
    file: Express.Multer.File,
  ): Promise<Express.Multer.File> {
    // Handle file asynchronously

    return file;
  }
}
