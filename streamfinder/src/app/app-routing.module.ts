import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainSearchComponent} from "./components/main-search/main-search.component";
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  {path: '', component: MainSearchComponent},
  {path: 'overview', children: [
    {path: ':id', component: OverviewComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
