import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '0b2dd4b2b2779bbbd83830d75d5cd13c';
  url;

  constructor(private http: HttpClient) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  getWeather(city, code): Observable<any> {
    return this.http.get<any>(this.url + city + ',' + code + '&APPID=' + this.apiKey).pipe();
  }
}
