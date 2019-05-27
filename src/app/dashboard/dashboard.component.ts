import { Component, OnInit } from '@angular/core';

import {AppService} from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css','../app.component.css']
})
export class DashboardComponent implements OnInit {

  templateloading = true;
  matchTypes;
  viewTypes = [];
  currentView = '';
  currentTemplate = '';
  loggedInUser = {};
  
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.loggedInUser = {'id' : 1, 'name' : 'Sangeeta Pillai' , 'rank' : 1};
    this.getAllTemplates();
    //this.currentGame = this.matchTypes[0].label;
    this.viewTypes = ['User View', 'Match View', 'Past Match View']
    this.currentView = this.viewTypes[1];
   
   
   
  }

  getAllTemplates() {
    this.templateloading = true;
    this.appService.getAllTemplates().subscribe
    (templateData => {
      this.templateloading = false;
      this.matchTypes = templateData.templateList;
      this.currentTemplate = this.matchTypes[0]
    });
  }
 

  /*switchView(viewType) {
    this.currentView = viewType;
    if (viewType === 'User View' ) {
      this.pastMatchView = false;
      this.userView = true;
      this.matchView = false;
    }  else if (viewType == 'Past Match View'){
      this.pastMatchView = true;
      this.userView = false;
      this.matchView = false;
    } else {
      this.pastMatchView = false;
      this.matchView =  true;
      this.userView = false;
    }

  }*/

  switchGame(game) {
    console.log(game);
    this.currentTemplate = game;
  }

  

}
