import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioFormComponent } from './usuario/usuario-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

/*material */
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadComponent } from './actividad/actividad.component';
import { ActividadFormComponent } from './actividad/actividad-form.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';


const routes: Routes = [
  { path: 'usuarioForm', component: UsuarioFormComponent},
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'actividades', component: ActividadComponent },
  {path: 'actividadForm', component: ActividadFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioFormComponent,
    ActividadComponent,
    ActividadFormComponent,
    AsistenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //agragar modulo de urls
    RouterModule.forRoot(routes),
    //@angular/material
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    //
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
