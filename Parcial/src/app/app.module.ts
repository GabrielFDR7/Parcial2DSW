import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandasModule } from './Bandas/Bandas.module';
import { ListarComponent } from './Bandas/Listar/Listar.component';
import { HttpClientModule } from '@angular/common/http';
import { BandasService } from './Bandas/Bandas.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BandasModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
