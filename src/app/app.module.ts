import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { HeaderComponent } from './header/header.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { ImageWithCaptionComponent } from './image-with-caption/image-with-caption.component';
import { ParagraphWithHeadlineComponent } from './paragraph-with-headline/paragraph-with-headline.component';
import { SetOfTwoComponent } from './set-of-two/set-of-two.component';
import { SetOfThreeComponent } from './set-of-three/set-of-three.component';
import { TextWithImageComponent } from './text-with-image/text-with-image.component';
import { HeadlineComponent } from './headline/headline.component';
import { SelectLocaleComponent } from './select-locale/select-locale.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallToActionComponent,
    HeaderComponent,
    HeroImageComponent,
    ImageCarouselComponent,
    ImageWithCaptionComponent,
    ParagraphWithHeadlineComponent,
    SetOfTwoComponent,
    SetOfThreeComponent,
    TextWithImageComponent,
    HeadlineComponent,
    SelectLocaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
