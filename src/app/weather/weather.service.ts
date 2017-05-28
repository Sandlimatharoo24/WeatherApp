

import { WeatherInterface } from './weatherinterface';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

 import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
    constructor(private http: Http) {
    }

    getData(): Observable<WeatherInterface[]> {
        return this.http.get('http://localhost:9090/sts')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        const body = res.json();
        return body || [];
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
