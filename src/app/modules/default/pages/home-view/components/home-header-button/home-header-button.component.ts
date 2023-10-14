import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header-button',
  templateUrl: './home-header-button.component.html',
  styleUrls: ['./home-header-button.component.css']
})
export class HomeHeaderButtonComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() title: string;
  @Input() redirectToUrl: string;
  @Input() backgroundColor: string;

  constructor() { }

  ngOnInit(): void {
  }

}
