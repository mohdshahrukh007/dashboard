import { Component, EventEmitter, Output } from '@angular/core';
import { SharedataService } from '../sharedata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
sidebaropen:boolean = false;
constructor(private sharedService:SharedataService){}
toggleSidenav(event:any) {
  this.sharedService.toggleSidenav(event);
}
} 

