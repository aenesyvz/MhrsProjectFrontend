import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css', "./../admin-common.css"]
})
export class AdminLayoutComponent implements OnInit {
  isSidebarVisible: boolean = true;

  constructor() { }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  ngOnInit(): void {
  }

}
