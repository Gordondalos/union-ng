import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {AppService} from './app.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  constructor(private appService: AppService) {
    this.appService.toggleSidebar.subscribe((res) => {
      this.sidenav.open();
    });
  }

  close() {
    this.sidenav.close();
  }


}
