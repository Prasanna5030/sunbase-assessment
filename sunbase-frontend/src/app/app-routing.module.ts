import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RouteGuardService } from './services/route-guard.service';
import { FullComponent } from './Layout/full/full.component';



import { ManageUserComponent } from './material-component/manage-user/manage-user.component';

const routes: Routes = [
  { path:'' , component:HomeComponent },
  { path:'home' , component:FullComponent, 
    children:[
  
 
      {
        path:'user' , component:ManageUserComponent , canActivate:[RouteGuardService],
        data:{expectedRole:['user:create,user:read,admin:read,ROLE_ADMIN,admin:create', 'user:create,ROLE_USER,user:read']}
      }
      
    ]
         },
 

  { path:'signup' , component:SignupComponent},
  {path:'login' , component:LoginComponent},

  {path:'forgotpassword', component:ForgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
