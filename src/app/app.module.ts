import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { SharedataService } from './sharedata.service';
import { MainBodyComponent } from './main-body/main-body.component';
import { SharedComponent } from './shared/shared.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    MainBodyComponent,
    SharedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
SharedModule,
RouterModule
  ],
  providers: [SharedataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
