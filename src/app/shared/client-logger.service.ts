import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class ClientLoggerService extends LoggerService {
  override log(message: string) {
    console.log(`ClientLoggerService ${this.id} log: ${message}`);
  }
}
