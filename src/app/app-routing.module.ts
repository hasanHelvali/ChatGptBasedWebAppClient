import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateImageComponent } from './components/image/create-image/create-image.component';
import { CompletionTextComponent } from './components/completion/completion-text/completion-text.component';
import { HomeComponent } from './components/home/home/home.component';

// const routes: Routes = [
//   {path:"",redirectTo:"home",pathMatch:"full"},
//   {path:"home",loadChildren:()=>import("./components/home/home.module").then(m=>m.HomeModule)},
//   {path:"completion",loadChildren:()=>import("./components/completion/completion.module").then(m=>m.CompletionModule)},
//   {path:"image",loadChildren:()=>import("./components/image/image.module").then(m=>m.ImageModule)},
//   {path:"**",redirectTo:"home",pathMatch:"full"},
// ];

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"completion",component:CompletionTextComponent},
  {path:"image",component:CreateImageComponent},
  {path:"**",redirectTo:"home",pathMatch:"full"},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
