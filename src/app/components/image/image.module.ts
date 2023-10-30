import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateImageComponent } from './create-image/create-image.component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateImageComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:"",component:CreateImageComponent}
    ])
  ]
})
export class ImageModule { }
