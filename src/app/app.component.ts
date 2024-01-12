import { Component, Input } from '@angular/core';
import { SharedataService } from './sharedata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSidebarOpen: boolean = true;
  constructor(private sharedService:SharedataService){}
  ngOnInit() {
    this.sharedService.showSidenav$.subscribe((isOpen) => {
      this.isSidebarOpen = !this.isSidebarOpen;
      console.log(this.isSidebarOpen)
    });

  }

}
