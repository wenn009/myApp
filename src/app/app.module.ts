import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';

import { DataService } from  './service/data.service'

import { AppComponent } from './app.component';
import { ProblemListComponent } from './component/problem-list/problem-list.component';
import { ProblemDetailComponent } from './component/problem-detail/problem-detail.component';
import { NavigationBarComponent } from './component/navigation-bar/navigation-bar.component';
import { NewProblemComponent } from './component/new-problem/new-problem.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NavigationBarComponent,
    NewProblemComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    {
      provide: 'data',
      useClass: DataService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
