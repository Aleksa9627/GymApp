import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { HomeComponent } from './home/home.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { MyTrainingsComponent } from './my-trainings/my-trainings.component';
import { UsersComponent } from './users/users.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';


//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule} from '@angular/material/input';
import { MatSliderModule} from '@angular/material/slider';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatRadioModule} from '@angular/material/radio';
import { MatSelectModule} from '@angular/material/select';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';


//Routing
const routes = [
  { path: '', component: HomeComponent },
  { path: '', component: ContactComponent, outlet: 'contact' },
  { path: '', component: AboutComponent, outlet: 'about' },
  { path: '', component: MyTrainingsComponent, outlet: 'my-trainings' },
  { path: '', component: TrainingsComponent, outlet: 'trainings' },
  { path: '', component: UsersComponent, outlet: 'users' },
  { path: '', component: LoginComponent, outlet: 'login' },

  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'contact', pathMatch: 'full', component: ContactComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: 'my-trainings', pathMatch: 'full', component: MyTrainingsComponent },
  { path: 'trainings', pathMatch: 'full', component: TrainingsComponent },
  { path: 'users', pathMatch: 'full', component: UsersComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrainingsComponent,
    MyTrainingsComponent,
    UsersComponent,
    ContactComponent,
    AboutComponent,
    ToolbarComponent,
    LoginComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    //Material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatNativeDateModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
