import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatGptCompletionService } from './services/chat-gpt-completion.service';
import { ChatGptImageService } from './services/chat-gpt-image.service';
import { CompletionModule } from './components/completion/completion.module';
import { ImageModule } from './components/image/image.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './components/home/home.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CompletionModule,
    ImageModule,
    RouterModule,
    HomeModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [ChatGptCompletionService,ChatGptImageService,{provide:"baseurl",useValue:"https://gptbasedapi"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
