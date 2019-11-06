import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './api/User.service';
import { WeatherpageComponent } from './weatherpage/weatherpage.component';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UsersComponent,
    WeatherpageComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
