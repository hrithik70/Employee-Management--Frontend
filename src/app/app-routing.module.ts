import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { UserDetailsComponent } from './Pages/user-details/user-details.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"userDetails", component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
