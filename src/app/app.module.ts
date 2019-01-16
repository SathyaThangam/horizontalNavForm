import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
