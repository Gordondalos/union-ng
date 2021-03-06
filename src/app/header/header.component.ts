import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'union-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private appService: AppService) {
  }

  ngOnInit() {
  }

  openSideBar(): void {
    this.appService.toggleSidebar.next(true);
  }

}
