import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weatherpage',
  templateUrl: './weatherpage.component.html',
  styleUrls: ['./weatherpage.component.scss']
})
export class WeatherpageComponent implements OnInit {

  location = {
    city: 'london',
    code: 'uk'
  };
  weather: any;
  value: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.value = localStorage.getItem('location');

    if (this.value != null) {
        this.location = JSON.parse(this.value);
    } else {
      this.location = {
        city: 'london',
        code: 'uk'
      };
    }

    this.weatherService.getWeather(this.location.city, this.location.code).subscribe(
      (response) => {
        console.log(response);
        this.weather = response;
    });
  }

}
