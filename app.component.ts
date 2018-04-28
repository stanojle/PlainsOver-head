import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
	

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  results = "";
  Aclist = {};

  constructor(private http: HttpClient){


  }

  ngOnInit(): void {
    this.http.get('https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json').subscribe(data => {
      console.log(data);
    });
  }

}
