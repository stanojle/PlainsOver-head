import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AirplaneService} from './services/airplane.service';





import { AppComponent } from './app.component';
import { PlainsComponent } from './plains/plains.component';
import { AuthorComponent } from './author/author.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LocationComponent } from './location/location.component';


@NgModule({
  declarations: [
    AppComponent,
    PlainsComponent,
    AuthorComponent,
    NavbarComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AirplaneService
    
    
    
  ],
  providers: [AirplaneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
