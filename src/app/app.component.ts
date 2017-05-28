import {Component} from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
@Component({
    selector: 'app-root',
    template: `
        <h1>Fetching:</h1>
        <weather-parent></weather-parent>
    `,
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'app works!';
}
