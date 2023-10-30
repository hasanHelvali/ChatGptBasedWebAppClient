import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatGptCompletionService } from './services/chat-gpt-completion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChatGptClient';
  constructor(private imageServis:ChatGptCompletionService){
  }

   tikla(){
    // const a=this.imageServis.get().subscribe(data=>console.log(data))
    // console.log(a);


  }
}
