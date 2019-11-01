import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiOutputComponent } from './api-output/api-output.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'random-word-gen', component: HomeComponent},
  {path: 'api/v1/generate', component: ApiOutputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
