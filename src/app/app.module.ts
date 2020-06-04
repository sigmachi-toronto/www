import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RushComponent } from './components/rush/rush.component';
import { HistoryComponent } from './components/history/history.component';
import { ExecComponent } from './components/exec/exec.component';
import { PhilanthropyComponent } from './components/philanthropy/philanthropy.component';
import { TitleService } from './shared/title.service';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    RushComponent,
    HistoryComponent,
    ExecComponent,
    PhilanthropyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ TitleService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
