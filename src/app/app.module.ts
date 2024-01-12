import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImggalleryComponent } from './components/imggallery/imggallery.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchpipePipe } from './pipes/searchpipe.pipe';
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from './myservices/apiservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ImggalleryComponent,
    HeaderComponent,
    SearchpipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
