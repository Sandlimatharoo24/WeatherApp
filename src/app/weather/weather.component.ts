import { Component} from '@angular/core';
import { WeatherListComponent } from './weather-list.component';
import { WeatherService } from './weather.service';

@Component({
    selector: 'weather-parent',
    template: `
        <h2>View Weather</h2>
        <weather-list></weather-list>
    `,
    providers: <any>[WeatherService]
})
export class WeatherComponent {
}
