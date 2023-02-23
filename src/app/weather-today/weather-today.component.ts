import { DatePipeConfig } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.scss']
})
export class WeatherTodayComponent implements OnInit {
  weatherJson: any;
  city: string;
  x:number;

  show: boolean = false;
  days: any[] = [];
  constructor(public server: WeatherService,private datePipe: DatePipe) {;
   }
  ngOnInit(): void {
  }
  getWeatherInformation() {
    let d =new Date(Date.now());
    this.x = d.getHours();
    this.server.getWeatherFor3Days(this.city).subscribe(succ => {
      this.weatherJson = succ;
      this.days = this.weatherJson.forecast.forecastday;
      console.log(this.weatherJson)
    }/*,err=>{console.log(err);}*/);
    this.show = true;
  }
}


