import { Component, inject, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/base.component';
import { LoggerService } from '../shared/logger.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService, LoggerService],
})
export class HomeComponent extends BaseComponent implements OnInit {
  cities: { name: string; image: string; alt: string }[] = [];
  protected override logger: LoggerService = inject(LoggerService, {
    self: true,
  });
  private homeService: HomeService = inject(HomeService);

  async ngOnInit() {
    console.log('HomeComponent ngOnInit start');
    this.addSafeSubscriber(
      this.homeService.getCities(),
      (
        cities: {
          name: string;
          image: string;
          alt: string;
        }[]
      ) => {
        this.cities = cities;
      }
    );
  }
}
