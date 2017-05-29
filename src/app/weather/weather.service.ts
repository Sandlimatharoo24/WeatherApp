

import { WeatherInterface } from './weatherinterface';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
  constructor(private http: Http) {
  }

  getData(): Observable<WeatherInterface[]> {

    const observable = this.http.get('http://api.openweathermap.org/data/2.5/find?q=Pune&units=imperial&type=accurate&APPID=c5c9d35807f401f7eda992e8e741979c');

    const subscription = observable.subscribe(res => {
      console.log('The response is received.');
    });

    setTimeout(() => {
      subscription.unsubscribe();
    }, 500);


    return observable
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    console.log(body);
    return body || [];
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }



}
