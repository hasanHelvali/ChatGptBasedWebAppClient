import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
      {path:"",component:HomeComponent}
    ])

  ]
})
export class HomeModule { }
