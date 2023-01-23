import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TvmazeApiService } from './services/tvmaze-api.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowItemComponent } from './components/show-item/show-item.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ShowDetailComponent, SearchBarComponent, ShowItemComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
