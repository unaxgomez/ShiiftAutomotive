import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { IllustrationDetailComponent } from './illustration-detail/illustration-detail.component';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { MycartComponent } from './mycart/mycart.component'
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [

  {path: 'user', component: UserComponent},
  {path: '', component: MainComponent},
  {path: 'illustration', component: IllustrationComponent},
  {path: 'illustration/:id', component: IllustrationDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'myaccount', component: MyaccountComponent},
  {path: 'mycart', component: MycartComponent},
  {path: '**', component: NotfoundComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    IllustrationComponent,
    HeaderComponent,
    MainComponent,
    UserComponent,
    IllustrationComponent,
    IllustrationDetailComponent,
    FooterComponent,
    LoginComponent,
    MyaccountComponent,
    MycartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
