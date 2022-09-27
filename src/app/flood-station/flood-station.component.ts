import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Station } from '../river-station';
import { StationService } from '../station.service';
import { Filter } from '../river-station';
import { XferService } from '../xfer.service';

@Component({
  selector: 'app-flood-station',
  templateUrl: './flood-station.component.html',
  styleUrls: ['./flood-station.component.css']
})

export class FloodStationComponent implements OnInit, OnDestroy {

	stations: Station[] = [];
	filter!: Filter;
	subscription1? :Subscription;
	subscription2? :Subscription;
  
  constructor(
  private stationService: StationService,
  private xferService:XferService
  ) 
  { }

  ngOnInit(): void {
	this.getStations();
  }
  
  ngOnDestroy(): void {
	  if (typeof this.subscription1 != 'undefined') {
		this.subscription1.unsubscribe();
	  }
	  if (typeof this.subscription2 != 'undefined') {
		this.subscription2.unsubscribe();
	  }
  }
  
  getStations(): void {
	  
	  this.filter=this.xferService.getData();
	  
	  this.stations=[];
	  
	  this.subscription1=this.stationService.getStationsLevel(this.filter).subscribe(ret => this.stations = [...this.stations, ...ret.items]);
	  
	  this.subscription2=this.stationService.getStationsFlow(this.filter).subscribe(ret => this.stations = [...this.stations, ...ret.items]);
	 
}

  search(): void {
	this.getStations();
  }

}
