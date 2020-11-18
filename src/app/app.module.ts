import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { ListaRegistrosComponent } from './components/lista-registros/lista-registros.component';

import { registroService} from './services/registros.service';
import { ValoresComponent } from './components/valores/valores.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterMesPipe } from './pipes/filter-mes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegistrosComponent,
    ListaRegistrosComponent,
    ValoresComponent,
    FilterPipe,
    FilterMesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [registroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
