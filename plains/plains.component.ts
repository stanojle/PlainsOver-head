import { Component, OnInit } from '@angular/core';
import { Plains} from '../model/plains';
import { AirplaneService} from '../services/airplane.service';

@Component({
	selector: 'poh-plains',
	templateUrl: './plains.component.html',
	styleUrls: ['./plains.component.css']
})

export class PlainsComponent implements OnInit {
	plainList:Plains[];
	plainCount:number;

	constructor(private plainService:AirplaneService) { }

	ngOnInit() {this.plainService.getAll().subscribe(
		data => {
			this.plainList= data.plane;
			this.plainCount= data.count;
		});
	}
}