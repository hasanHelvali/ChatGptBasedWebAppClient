import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatGptCompletionService {

  constructor(private httpClient:HttpClient,@Inject("baseurl") private url:string) { }


  getCompletion(prompt:string):Observable<string>{
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post<any>(this.url + "completion", JSON.stringify(prompt),{headers});

  }
}

export class Prompt{
  prompt:string
}
