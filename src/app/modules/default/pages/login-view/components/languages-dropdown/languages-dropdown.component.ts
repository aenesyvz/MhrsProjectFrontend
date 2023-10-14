import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages-dropdown',
  templateUrl: './languages-dropdown.component.html',
  styleUrls: ['./languages-dropdown.component.css']
})
export class LanguagesDropdownComponent implements OnInit {

  constructor(private elRef: ElementRef) { }
  isOpenDropdownMenu: boolean = false;
  selectLanguage: Language;
  languages: Language[] = [
    {
      flagUrl: "assets/images/turkey.png",
      name: "Türkçe"
    },
    {
      flagUrl: "assets/images/united-kingdom.png",
      name: "English"
    },
    {
      flagUrl: "assets/images/saudi-arabia.png",
      name: "عربي"
    },
    {
      flagUrl: "assets/images/russia.png",
      name: "Русский"
    },
    {
      flagUrl: "assets/images/germany.png",
      name: "Deutsch"
    }
  ];


  ngOnInit(): void {
    this.selectLanguage = this.languages[0];
  }

  openDropdownMenu() {
    this.isOpenDropdownMenu = !this.isOpenDropdownMenu;
  }

  closeDropdownMenu() {
    this.isOpenDropdownMenu = false;
  }

  changeLanguage(language: Language) {
    this.selectLanguage = language;
    this.closeDropdownMenu();
  }

  //Menü dışında tıklanıldığında kapanıyor
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isOpenDropdownMenu = false;
    }
  }

  ngOnDestroy() {
    // Event listener'ı bileşen yok edildiğinde kaldır
    document.removeEventListener('click', this.handleClickOutside);
  }
}


interface Language {
  flagUrl: string;
  name: string;
}