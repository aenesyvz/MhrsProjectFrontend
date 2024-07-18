import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-home-tabbar',
  templateUrl: './patient-home-tabbar.component.html',
  styleUrls: ['./patient-home-tabbar.component.css']
})
export class PatientHomeTabbarComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }
  tabIndex: number = 0;

  ngOnInit(): void {
  }

  showSelectTab(index: number) {
    this.tabIndex = index;
    const tab__contents = this.elementRef.nativeElement.querySelector(".tab__contents");
    tab__contents.style.marginLeft = `-${this.tabIndex * 100}%`;
  }

  showPastAppointmentTabbar() {

  }
}
