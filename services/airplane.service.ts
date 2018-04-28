import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Plains} from '../model/plains';
import { PlainsSearchResult} from '../model/PlainsSearchResult';

const baseUrl ="https://github.com/adsbxchange/mlat-client";

@Injectable()
export class AirplaneService {

	constructor( ) {}

	getAll(params? :any) :Observable<PlainsSearchResult>{
		let queryParams = {};
		if(params){
			queryParams = {
				params : new HttpParams()
				.set("sort", params.sort || "")
				.set("sortDirection", params.sortDirection || "")
				.set("page", params.page && params.page.toString() || "")
				.set("pageSize", params.page && params.pageSize.toString() || "")
				.set("filter", params.filter && JSON.stringify(params.filter) || "")
			}
		}

		return this.http.get(baseUrl, queryParams).map( 
			response => new PlainsSearchResult(response)
			);
	}
}
