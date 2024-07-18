import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './pages/home-view/home-view.component';
import { HomeHeaderComponent } from './pages/home-view/components/home-header/home-header.component';
import { HomeHeaderButtonComponent } from './pages/home-view/components/home-header-button/home-header-button.component';
import { HomeBannerComponent } from './pages/home-view/components/home-banner/home-banner.component';
import { AnnouncementsComponent } from './pages/home-view/components/announcements/announcements.component';
import { TextTruncatePipe } from 'src/app/pipes/text-truncate.pipe';
import { SocialMediasAndIlluminationTextComponent } from './pages/home-view/components/social-medias-and-illumination-text/social-medias-and-illumination-text.component';
import { IlluminationTextModalComponent } from './pages/home-view/components/social-medias-and-illumination-text/illumination-text-modal/illumination-text-modal.component';
import { MhrsInfoComponent } from './pages/home-view/components/mhrs-info/mhrs-info.component';
import { FooterComponent } from './pages/home-view/components/footer/footer.component';
import { LoginViewComponent } from './pages/login-view/login-view.component';
import { LanguagesDropdownComponent } from './pages/login-view/components/languages-dropdown/languages-dropdown.component';
import { DefaultViewInputComponent } from './components/default-view-input/default-view-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterViewComponent } from './pages/register-view/register-view.component';
import { DefaultViewSelectComponent } from './components/default-view-select/default-view-select.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnnouncementDetailModalComponent } from './pages/home-view/components/announcements/announcement-detail-modal/announcement-detail-modal.component';



@NgModule({
  declarations: [
    HomeViewComponent,
    HomeHeaderComponent,
    HomeHeaderButtonComponent,
    HomeBannerComponent,
    AnnouncementsComponent,
    TextTruncatePipe,
    SocialMediasAndIlluminationTextComponent,
    IlluminationTextModalComponent,
    MhrsInfoComponent,
    FooterComponent,
    LoginViewComponent,
    LanguagesDropdownComponent,
    DefaultViewInputComponent,
    RegisterViewComponent,
    DefaultViewSelectComponent,
    AnnouncementDetailModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DefaultModule { }
