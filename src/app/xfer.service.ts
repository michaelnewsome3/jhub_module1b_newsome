import { Injectable } from '@angular/core';
import { Filter } from './river-station';
@Injectable({
  providedIn: 'root'
})
export class XferService {

  constructor(
  ) { }
	
  private filter!: Filter;
  
  setData(data: Filter): void{
	this.filter = data;
  }

  getData(): Filter{
    let temp = this.filter;
    return temp;
  }
}
