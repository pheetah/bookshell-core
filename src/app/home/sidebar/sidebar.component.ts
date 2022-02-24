import { Component, OnInit } from '@angular/core';

interface Routes {
  name: string,
  code: string
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  display = false;

  routes: Routes[];

  selectedRoute!: Routes;

  constructor() {
    this.routes = [
      {name: 'Page1', code: 'P1'},
      {name: 'Page2', code: 'P2'},
    ];
  }

  ngOnInit(): void {
  }

}
