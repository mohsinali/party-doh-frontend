import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartyPackagesSliderComponent } from './party-packages-slider/party-packages-slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PartyPackagesSliderComponent],
  exports: [PartyPackagesSliderComponent]
})
export class HomeModule { }
