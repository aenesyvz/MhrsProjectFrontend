import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-social-medias-and-illumination-text',
  templateUrl: './social-medias-and-illumination-text.component.html',
  styleUrls: ['./social-medias-and-illumination-text.component.css']
})
export class SocialMediasAndIlluminationTextComponent implements OnInit, OnDestroy {
  isShowModal: boolean = false;

  constructor(private renderer: Renderer2) { }
  ngOnDestroy(): void {
    this.enableBodyScroll();
  }

  ngOnInit(): void {
  }

  openModal() {
    this.isShowModal = true;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  closeModal() {
    this.isShowModal = false;
    this.enableBodyScroll();
  }

  private disableBodyScroll() {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  private enableBodyScroll() {
    this.renderer.removeStyle(document.body, 'overflow');
  }
}
