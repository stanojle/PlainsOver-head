import { Plains } from './plains';

export class PlainsSearchResult{

	plane :Plains[];
	count :number;
	
	constructor(obj? :any){
		this.plane = obj && obj.results.map(elem => { return new
			Plains(elem); }) || [];
		this.count = obj && obj.count || null;
	}
}