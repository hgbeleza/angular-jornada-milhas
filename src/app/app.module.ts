import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './shared/banner/banner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardComponent } from './shared/card/card.component';
import { ModalComponent } from './shared/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { ContainerComponent } from './shared/container/container.component';
import { CardBuscaComponent } from './shared/card-busca/card-busca.component';
import { MatCardModule } from '@angular/material/card';
import { DepoimentosComponent } from './shared/depoimentos/depoimentos.component';
import { FormBuscaComponent } from './shared/form-busca/form-busca.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BotaoControleComponent } from './shared/botao-controle/botao-controle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
    ContainerComponent,
    CardBuscaComponent,
    DepoimentosComponent,
    FormBuscaComponent,
    ModalComponent,
    BotaoControleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
