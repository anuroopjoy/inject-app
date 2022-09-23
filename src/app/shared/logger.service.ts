import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  protected id = 0;
  constructor() {
    this.id = Math.random() * 100;
  }

  log(message: string) {
    console.log(`LoggerService ${this.id} log: ${message}`);
  }
}
