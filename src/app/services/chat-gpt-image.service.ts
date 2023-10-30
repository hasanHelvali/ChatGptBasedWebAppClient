import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Image } from '../models/image';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatGptImageService {

  constructor(private httpClient:HttpClient,@Inject("baseurl") private url:string) { }


  getImage(image:Image):Observable<any>{
    return this.httpClient.post<Array<string>>((this.url+"image").replace("\n","").replace(" ",""),image);
  }
}
