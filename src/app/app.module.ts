import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from '@core/core.component';
import { HeaderComponent } from '@core/header/header.component';
import { DragonsComponent } from '@core/dragons/dragons.component';
import { MenuComponent } from '@core/menu/menu.component';
import { DragonDetailComponent } from '@core/dragons/dragon-detail/dragon-detail.component';
import { DragonCardComponent } from '@core/dragons/dragon-card/dragon-card.component';
import { DragonRegisterComponent } from '@core/dragon-register/dragon-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    HeaderComponent,
    DragonsComponent,
    MenuComponent,
    DragonDetailComponent,
    DragonCardComponent,
    DragonRegisterComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [ HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }

