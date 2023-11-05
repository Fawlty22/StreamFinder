import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSearchComponent } from './components/main-search/main-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import { TruncatePipe } from './pipes/truncate.pipe';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { BackToTopComponent } from './core/components/back-to-top/back-to-top.component';
import {MatIconModule} from "@angular/material/icon";
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OverviewComponent } from './components/overview/overview.component';
@NgModule({
  declarations: [
    AppComponent,
    MainSearchComponent,
    TruncatePipe,
    BackToTopComponent,
    SearchResultComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
