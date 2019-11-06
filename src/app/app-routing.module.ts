import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import {UsersComponent} from './users/users.component';
import { WeatherpageComponent } from './weatherpage/weatherpage.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'table', component: UsersComponent },
  { path: 'weather', component: WeatherpageComponent},
  { path: 'setting', component: SettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
