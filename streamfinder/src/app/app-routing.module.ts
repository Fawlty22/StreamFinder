import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainSearchComponent} from "./components/main-search/main-search.component";

const routes: Routes = [
  {path: '', component: MainSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
