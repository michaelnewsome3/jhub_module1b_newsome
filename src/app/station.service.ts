import { Injectable } from '@angular/core';
import { stationJSON, readingJSON, readingJSONSingle, Filter } from './river-station';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StationService {

	private stationsUrl1 = 'https://environment.data.gov.uk/flood-monitoring/id/stations?parameter=level'; 
	private stationsUrl2 = 'https://environment.data.gov.uk/flood-monitoring/id/stations?parameter=flow'; 
	private stationsUrl3 = 'https://environment.data.gov.uk/flood-monitoring/id/stations/';
	
  constructor( private http: HttpClient) { }
  
  getStationsLevel(filter: Filter): Observable<stationJSON> {
		
		var passURL: string=this.stationsUrl1;
		
		if(filter.location!="Whole UK")
		{
			passURL=passURL+"&lat="+filter.lat+"&long="+filter.lng+"&dist="+filter.distance
		}
		return this.http.get<stationJSON>(passURL);
  }
  getStationsFlow(filter: Filter): Observable<stationJSON> {
		
		var passURL: string=this.stationsUrl2;
		
		if(filter.location!="Whole UK")
		{
			passURL=passURL+"&lat="+filter.lat+"&long="+filter.lng+"&dist="+filter.distance
		}
		return this.http.get<stationJSON>(passURL);
  }
  getStationsReading(ID: string): Observable<readingJSON> {
		
		const getURL=this.stationsUrl3+ID;
		return this.http.get<readingJSON>(getURL);
  }
  getStationsReadingSingle(ID: string): Observable<readingJSONSingle> {
		
		const getURL=this.stationsUrl3+ID;
		return this.http.get<readingJSONSingle>(getURL);
  }
  
}
