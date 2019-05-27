import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import {AppService} from './app.service';
import {AuthenticationService} from './authentication.service';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SearchPipe} from './search.pipe';
import { MatchComponent } from './match/match.component';
import { PastMatchComponent } from './past-match/past-match.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
{path:'',component:DashboardComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchPipe,
    MatchComponent,
    PastMatchComponent,
    LeaderBoardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
