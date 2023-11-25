import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/common/base/base.component';
import { ChatGptImageService } from 'src/app/services/chat-gpt-image.service';

@Component({
  selector: 'app-create-image',
  templateUrl: './create-image.component.html',
  styleUrls: ['./create-image.component.css']
})
export class CreateImageComponent extends BaseComponent implements OnInit {
   sizeList:Array<string>=["256","512","1024"];
   pieceList:Array<string>=["1","2","3","4","5"];
   pictureLinks:Array<string>=[];
   selectedSize:number;
   request:boolean=false;
   disable:boolean=false;
  constructor(spinner:NgxSpinnerService,private builder:FormBuilder, private imageService:ChatGptImageService) {
    super(spinner);
    }

    ngOnInit(): void {
      this.showSpinner();
      this.hideSpinner();
    }
    startRequest(form:NgForm,prompt:any,size:HTMLSelectElement,piece:HTMLSelectElement){
      this.request=false;
      this.selectedSize=+size.value;
      this.pictureLinks=[];
      if(!form.valid){
        alert("You Must Enter With All Paarameters")
        return;
      }
      this.showSpinner();
      this.imageService.getImage({Prompt:prompt,Piece:+piece.value,Size:+size.value})
      .subscribe({
        next:(data)=>{

          this.request=true;
          this.pictureLinks=data
          this.hideSpinner();
          this.disable=true;
        },
        error:(err)=>{
          this.hideSpinner()
          this.request=false
          alert("Bir seyler ters gitti...");
        }
      })

    }
    btn(){
      this.disable=false;
      this.pictureLinks=[]
      this.request=false;

    }
    download(url:string){
      console.log(url);

    }
}
