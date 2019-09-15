import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInfoComponent } from './components/info/app.info.component';
import { TestLayoutComponent } from './components/test/testconsole.component';
import { NumberHashDirective } from './directives/numberhash.directive';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/encode.reducer';

@NgModule({
  declarations: [
    AppComponent,
    AppInfoComponent,
    TestLayoutComponent,
    NumberHashDirective,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      encodedata: reducer
    }),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
