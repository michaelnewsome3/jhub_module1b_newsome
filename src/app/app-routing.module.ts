import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloodStationComponent } from './flood-station/flood-station.component';
import { FloodStationReadingComponent } from './flood-station-reading/flood-station-reading.component';

const routes: Routes = [
  { path: 'flood-stations', component: FloodStationComponent },
  { path: 'flood-stations-reading/:id', component: FloodStationReadingComponent },
  { path: '', redirectTo: '/flood-stations', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
