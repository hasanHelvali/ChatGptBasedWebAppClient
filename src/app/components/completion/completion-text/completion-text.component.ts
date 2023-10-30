import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/common/base/base.component';
import { ChatGptCompletionService, Prompt } from 'src/app/services/chat-gpt-completion.service';

@Component({
  selector: 'app-completion-text',
  templateUrl: './completion-text.component.html',
  styleUrls: ['./completion-text.component.css']
})
export class CompletionTextComponent extends BaseComponent {
  disable:boolean=false;
  cevap:string="";
  clear="";
  constructor(spinner:NgxSpinnerService,private completionService:ChatGptCompletionService) {
    super(spinner);
  }
  startRequest(frm:NgForm,prompt:string){
    if(!frm.valid){
      alert("You Must Enter With All Paarameters")
      return;
    }
    this.showSpinner();
    this.completionService.getCompletion(prompt).subscribe({
        next:(data)=>{
          this.hideSpinner();
          this.disable=true;
          this.cevap=data;
          this.clear=prompt
        },
        error:(err)=>{
          this.hideSpinner()
          alert("Bir seyler ters gitti...");
          this.disable=false;
        }
      })
  }

  newRequest(frm:NgForm){
    this.cevap="";
    this.disable=false;
    this.clear=""
  }




}
