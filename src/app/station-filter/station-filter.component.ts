import { Component, OnInit } from '@angular/core';
import { XferService } from '../xfer.service';
import { Filter } from '../river-station';

@Component({
  selector: 'app-station-filter',
  templateUrl: './station-filter.component.html',
  styleUrls: ['./station-filter.component.css']
})
export class StationFilterComponent implements OnInit {
	
	filter: Filter ={
		location: 'Whole UK',
		distance: 10,
		lat: 0,
		lng: 0	
	};
	distanceDisabled: boolean=true;
	latDisabled: boolean=true;
	lngDisabled: boolean=true;

  constructor(
	private xferService:XferService
  ) { }

  ngOnInit(): void {
	  this.xferService.setData(this.filter);
  }
  
  locationChange(): void{
	
	if(this.filter.location=='Whole UK')
	{
		this.filter.lat=0;
		this.filter.lng=0;
		this.distanceDisabled=true;
		this.latDisabled=true;
		this.lngDisabled=true;
	}
	else if(this.filter.location=='Custom')
	{
		this.filter.lat=0;
		this.filter.lng=0;
		this.distanceDisabled=false;
		this.latDisabled=false;
		this.lngDisabled=false;
	}
	else if(this.filter.location=='Brize Norton')
	{
		this.filter.lat=51.75068;
		this.filter.lng=-1.58107;
		this.distanceDisabled=false;
		this.latDisabled=true;
		this.lngDisabled=true;
	}
	else if(this.filter.location=='Coningsby')
	{
		this.filter.lat=53.09413;
		this.filter.lng=-0.16188;
		this.distanceDisabled=false;
		this.latDisabled=true;
		this.lngDisabled=true;
	}
	else if(this.filter.location=='Cranwell')
	{
		this.filter.lat=53.03002;
		this.filter.lng=-0.48694;
		this.distanceDisabled=false;
		this.latDisabled=true;
		this.lngDisabled=true;
	}
	else if(this.filter.location=='Leeming')
	{
		this.filter.lat=54.29479;
		this.filter.lng=-1.53667;
		this.distanceDisabled=false;
		this.latDisabled=true;
		this.lngDisabled=true;
	}
	else if(this.filter.location=='Lossiemouth')
	{
		this.filter.lat=57.70819;
		this.filter.lng=-3.33516;
		this.distanceDisabled=false;
		this.latDisabled=true;
		this.lngDisabled=true;
	}
	else if(this.filter.location=='Marham')
	{
		this.filter.lat=52.64736;
		this.filter.lng=0.55375;
		this.distanceDisabled=false;
		this.latDisabled=true;
		this.lngDisabled=true;
	}
	else if(this.filter.location=='Valley')
	{
		this.filter.lat=53.24923;
		this.filter.lng=-4.53870;
		this.distanceDisabled=false;
		this.latDisabled=true;
		this.lngDisabled=true;
	}
	
	this.xferService.setData(this.filter);
  }
  
  inputChange(): void {
	  this.xferService.setData(this.filter);
  }
  
}



