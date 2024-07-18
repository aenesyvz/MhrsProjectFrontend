import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-navbar',
  templateUrl: './patient-navbar.component.html',
  styleUrls: ['./patient-navbar.component.css']
})
export class PatientNavbarComponent implements OnInit {

  constructor(private elementRef: ElementRef, private router: Router) { }

  openSubMenu: number[] = [];

  ngOnInit(): void {
  }

  openMenu() {
    const navMenu = this.elementRef.nativeElement.querySelector("#nav-menu");
    navMenu.classList.add("show__menu");
  }

  closeMenu() {
    const navMenu = this.elementRef.nativeElement.querySelector("#nav-menu");
    navMenu.classList.remove("show__menu");
  }

  navigate(path: string) {
    this.closeMenu();
    this.router.navigate([path]);
  }

  exit() {
    this.router.navigate([""])
  }

  toggleSubMenu(indexMenu: number) {
    console.log("B");

    if (this.openSubMenu.includes(indexMenu)) {
      console.log("ı");
      this.openSubMenu = this.openSubMenu.filter((x) => x !== indexMenu);
      console.log(this.openSubMenu);
    } else {
      this.openSubMenu.push(indexMenu);
    }
  }
}
