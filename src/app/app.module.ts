import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { Config, LogType } from './shared/logger.interface';
import { LoggerService } from './shared/logger.service';
import { loggerServiceFactory } from './shared/logger.service.provider';

export const config = {
  logType: LogType.Client,
};
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: Config, useValue: config },
    {
      provide: LoggerService,
      useFactory: loggerServiceFactory,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
