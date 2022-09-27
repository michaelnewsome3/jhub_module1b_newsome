export interface stationJSON {
	meta: string;
	items: Station[];
}

export interface Station {
  notation: string; //ID to information URL
  label: string; //name of the measuring station
  lat: number;
  long: number;
  riverName: string;  //flow rate or river level
  measures: stationMeasure[];
  town: string;
}

export interface stationMeasure { 
	parameter: string;
	parameterName: string;
}

export interface readingJSON {
	meta: string;
	items: Reading;
}

export interface readingJSONSingle {
	meta: string;
	items: ReadingSingle;
}


export interface Reading {
	catchmentName: string;
	label: string;
	lat: number;
	long: number;
	riverName: string;
	measures: readingMeasure[];
	stageScale: readingScale;
}

export interface ReadingSingle {
	catchmentName: string;
	label: string;
	lat: number;
	long: number;
	riverName: string;
	measures: readingMeasure;
	stageScale: readingScale;
}

export interface readingMeasure {
	parameterName: string;
	unitName: string;
	latestReading: readingReading;
}

export interface readingReading {
	dateTime: string;
	value: number;
}

export interface readingScale{
	typicalRangeHigh : number;
    typicalRangeLow : number;
}
	  
export interface Filter{
		location: string;
		lat: number;
		lng: number;
		distance: number;
	}	  


	