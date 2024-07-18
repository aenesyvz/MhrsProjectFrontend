import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-home-card',
  templateUrl: './patient-home-card.component.html',
  styleUrls: ['./patient-home-card.component.css']
})
export class PatientHomeCardComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() title: string;
  @Input() description: string;
  @Input() backgroundColor: string;

  constructor() { }

  ngOnInit(): void {
  }

}
