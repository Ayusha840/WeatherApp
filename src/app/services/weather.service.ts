import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiUrl: string = 'https://api.weatherbit.io/v2.0/forecast/daily';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  apiKey = '371d4e84f04f4e6eafe38174f3de11e5'
  constructor(private http: HttpClient) { }

  getWeatherInfo(city: any): Observable<any> {
    let API_URL = `${this.apiUrl}?key=${this.apiKey}&city=${city}&days=7`;
    return this.http.get(API_URL);
  }
}
