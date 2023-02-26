import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(public http: HttpClient) { }
  getWeatherFor3Days(city: string): Observable<string> {
    return this.http.get<string>(`https://localhost:7165/api/Weather/3days/${city}`);
  }
}
