
import { NgModule, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CustomInputComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    CustomInputComponent,
    ReactiveFormsModule,
    FooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ]
})
export class SharedModule { }
