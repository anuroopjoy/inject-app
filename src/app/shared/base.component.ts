import { Directive, inject, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LoggerService } from './logger.service';

@Directive()
export class BaseComponent implements OnDestroy {
  #subscribers: Subscription[] = [];
  protected logger = inject(LoggerService);

  addSafeSubscriber(source: Observable<unknown>, handler: any) {
    this.#subscribers.push(source.subscribe(handler));
    this.logger.log('added subscription');
  }
  ngOnDestroy(): void {
    for (const subscriber of this.#subscribers) {
      subscriber.unsubscribe();
      this.logger.log('removed subscription');
    }
  }
}
