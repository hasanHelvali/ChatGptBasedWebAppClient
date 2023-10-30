import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletionTextComponent } from './completion-text/completion-text.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CompletionTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:"",component:CompletionTextComponent}
    ])
  ]
})
export class CompletionModule { }
