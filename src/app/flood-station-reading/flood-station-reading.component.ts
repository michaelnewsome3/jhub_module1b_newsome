import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { Reading } from '../river-station';
import { ReadingSingle } from '../river-station';
import { StationService } from '../station.service';


@Component({
  selector: 'app-flood-station-reading',
  templateUrl: './flood-station-reading.component.html',
  styleUrls: ['./flood-station-reading.component.css']
})
export class FloodStationReadingComponent implements OnInit,OnDestroy {

  readings!: Reading;
  readingsSingle!: ReadingSingle;
  subscription1? :Subscription;
  subscription2? :Subscription;
  
  constructor(private route: ActivatedRoute,
  private location: Location,
  private stationService: StationService) {}

  ngOnInit(): void {
	  this.getReadings();
  }

  getReadings(): void {  
	const id = this.route.snapshot.paramMap.get('id');
	if(id!=null)
	{
		this.subscription1=this.stationService.getStationsReading(id).subscribe(ret => this.readings = ret.items);
		this.subscription2=this.stationService.getStationsReadingSingle(id).subscribe(ret => this.readingsSingle = ret.items);
	}
  }
  
  ngOnDestroy(): void {
	  if (typeof this.subscription1 != 'undefined') {
		this.subscription1.unsubscribe();
	  }
	  if (typeof this.subscription2 != 'undefined') {
		this.subscription2.unsubscribe();
	  }
  }
	
goBack(): void {
  this.location.back();
}

//function for testing only
displayJSON(): void {
	console.log(this.readings);
	console.log(this.readingsSingle);
}

}
