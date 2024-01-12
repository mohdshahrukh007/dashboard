// shared.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedataService {
  private showSidenavSource = new Subject<boolean>();

  showSidenav$ = this.showSidenavSource.asObservable();

  toggleSidenav(data:any) {
    this.showSidenavSource.next(data);
  }
}
