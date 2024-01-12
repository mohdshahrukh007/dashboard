import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBodyComponent } from './main-body/main-body.component';
import { SharedComponent } from './shared/shared.component';
import { PiechartComponent } from './shared/piechart/piechart.component';

const routes: Routes = [
  {
    path:'', component:MainBodyComponent,  
  },
  {
    path:'dashboard',component:SharedComponent,
  children:[
      {path:'',component:PiechartComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
