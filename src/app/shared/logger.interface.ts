import { InjectionToken } from '@angular/core';

export const enum LogType {
  Default,
  Client,
}
export interface AppConfig {
  logType: LogType;
}

export const Config = new InjectionToken<AppConfig>('AppConfig');
