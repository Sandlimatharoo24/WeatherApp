
import {Component} from '@angular/core';

import { WeatherService } from './weather.service';
import { WeatherInterface } from './weatherinterface';


@Component({
    selector: 'weather-list',
    template: `
        <div>
            <ul class="items">
                <li *ngFor="let weather of weathers">
                    <span>{{weather.firstName}}</span>
<br>
<span>{{weather.lastName}}</span>
<br>
<span>{{weather.email}}</span>
                </li>
            </ul>
        </div>
    `
})

export class WeatherListComponent {
    protected weathers: WeatherInterface[] = [];
    private errorMessage: any = '';


    constructor(private _weatherDataService: WeatherService) {
        // should be moved to ngOnInit life cycle hook
      console.log('beforeservice');
        this.getWeather();
console.log('afterservice');
    }


    getWeather() {
    console.log('inservice');
        this._weatherDataService.getData()
            .subscribe(
                weathers => this.weathers = weathers,
                error => this.errorMessage = <any>error);
    }
}
