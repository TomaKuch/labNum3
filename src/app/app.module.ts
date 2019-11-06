import { BrowserModule } from '@angular/platform-browser';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { MaterialModule } from './homepage/material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCheckboxModule, MatListModule, MatCardModule } from '@angular/material';

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
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule
  ],
  providers: [
    UserService,
    WeatherService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
