import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { ServerService} from './server.service';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardComponent,
    ListComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})

export class AppModule { }
