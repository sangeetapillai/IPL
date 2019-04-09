import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  matchTypes = [];
  pastMatchesByType = [];
  viewTypes = [];
  matchesByType = [];
  selectedTeam = '';
  selectedMatch = '';
  selectedMatchId = '';
  userView = false;
  matchView = true;
  pastMatchView = false;
  currentView = '';
  currentGame = '';
  users = [];
  loggedInUser = {};
  constructor() { }

  ngOnInit() {
    this.loggedInUser = {'id' : 1, 'name' : 'Sangeeta Pillai' , 'rank' : 1};
    this.matchTypes = [{'label': 'IPL'}, {'label': 'VBL'}, {'label': 'VBL'},
      {'label': 'VBL'}, {'label': 'VBL'}, {'label': 'ISL'}, {'label': 'World Cup'},
      {'label': 'World Cup'}];
    this.currentGame = this.matchTypes[0].label;
    this.viewTypes = ['User View', 'Match View', 'Past Match View']
    this.currentView = this.viewTypes[1];
    this.matchesByType = [
      {'id': 1, 'team1' : 'Chennai Super Kings', 'team2': 'Royal Challengers' ,
         'time' : '12/08/2013 12:00:00 PM' , 'votedFor' : 'Chennai Super Kings'},
      {'id': 2, 'team1' : 'Kolkata knight riders', 'team2': 'Mumbai Indians' ,
        'time' : '21/08/2013 12:00:00 PM' , 'votedFor': null}
      ];
    this.pastMatchesByType = [
      {'id': 1, 'team1' : 'Chennai Super Kings', 'team2': 'Royal Challengers' ,
         'time' : '12/08/2013 12:00:00 PM' , 'votedFor' : 'Chennai Super Kings', 'winner': 'Chennai Super Kings', 'won':false},
      {'id': 2, 'team1' : 'Kolkata knight riders', 'team2': 'Mumbai Indians' ,
        'time' : '21/08/2013 12:00:00 PM' , 'votedFor': 'draw', 'winner':'draw' , 'won':true}
      ];

    this.users = [
      {'id': 1 , 'name' : 'Sangeeta Pillai' , 'bounty' : 30  , 'won'  : 3 , 'lost' : 1 , 'rank' : 1},
      {'id': 1 , 'name' : 'Mariya Baby' , 'bounty' : 30  , 'won'  : 3 , 'lost' : 1 , 'rank' : 2},
      {'id': 1 , 'name' : 'Sharath Ravi' , 'bounty' : 30  , 'won'  : 3 , 'lost' : 1 , 'rank' : 3},
      {'id': 1 , 'name' : 'Suma Nair' , 'bounty' : 30  , 'won'  : 3 , 'lost' : 1 , 'rank' : 4},
      {'id': 1 , 'name' : 'Abraham Lincoln' , 'bounty' : 30  , 'won'  : 3 , 'lost' : 1, 'rank' : 5}


    ];
  }
  selectTeamforBet(match, team)
  {
    this.selectedMatchId = match.id;
    this.selectedTeam = team;
    this.selectedMatch = match.team1 + ' vs ' + match.team2;
  }

  switchView(viewType) {
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

  }

  switchGame(game) {
    this.currentGame = game.label;
  }

  bet() {
    return;
  }

}
