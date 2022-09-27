import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloodStationComponent } from './flood-station/flood-station.component';
import { FloodStationReadingComponent } from './flood-station-reading/flood-station-reading.component';
import { StationFilterComponent } from './station-filter/station-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    FloodStationComponent,
    FloodStationReadingComponent,
    StationFilterComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    AppRoutingModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
	}
