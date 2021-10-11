import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  cityList = ['Mumbai', 'London', 'Paris', 'Japan', 'Singapore'];
  cityName!: string;
  cityWeatherDetails!: Array<any>;
  showSpinner = true;
  weatherForm!: FormGroup;
  current = this.cityList[0];

  constructor(
    public weatherService: WeatherService
  ) { }

  ngOnInit(): void {
  }

  getData() {
    this.getWeather(this.cityList[0]);

  }

  changeCity(e: any): void {
    this.showSpinner = true;
    this.cityName = e.target.value;
    this.getWeather(this.cityName);
  }

  getWeather(city: string): void {
    this.weatherService.getWeatherInfo(city).subscribe((res) => {
      if (res) {
        this.showSpinner = false;
        this.cityWeatherDetails = res.data;

      }
    })
  }

  onSubmit(formValue: any) {
    this.getWeather(formValue.city);
  }

}
