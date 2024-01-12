import { Component, Input } from '@angular/core';
import { SharedataService } from '../sharedata.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  showSidenav: boolean = true;
  constructor(public sharedService: SharedataService){}
ngOnInit(): void {
  this.sharedService.showSidenav$.subscribe(() => {
    this.showSidenav = !this.showSidenav;
    
  });
   
}
}
