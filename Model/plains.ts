export class Plains{

	Alt:number;
	Icao:string;
	Man:string;
	Mdl:string;
	Op:string;
	From:string;
	To:string;
	Lat:number;
	Long:number;


	constructor(obj? :any){
		this.Alt= obj && obj.Alt|| "";
		this.Icao= obj && obj.Icao || "";
		this.Man= obj && obj.Man|| "";
		this.Mdl= obj && obj.Mdl || "";
		this.Op= obj && obj.Op|| "";
		this.From= obj && obj.From || "";
		this.To= obj && obj.To|| "";
		this.Lat= obj && obj.Lat || null;
		this.Long= obj && obj.Long|| null;

	}
}