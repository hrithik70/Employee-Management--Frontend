import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { UserDetailsComponent } from './Pages/user-details/user-details.component';
import { UserUpdateComponent } from './Pages/user-update/user-update.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"userDetails", component : UserDetailsComponent},
  {path:"userUpdate/:userId",component : UserUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
