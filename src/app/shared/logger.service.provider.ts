import { AppConfig, Config, LogType } from './logger.interface';
import { ClientLoggerService } from './client-logger.service';
import { LoggerService } from './logger.service';
import { inject } from '@angular/core';

export const loggerServiceFactory = () => {
  const config = inject(Config);
  if (config.logType === LogType.Client) {
    return new ClientLoggerService();
  }
  return new LoggerService();
};
