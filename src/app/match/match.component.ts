import { Component, OnInit,Input } from '@angular/core';
import {AppService} from '../app.service';
import {Prediction} from '../models/model';
import {PlayerData} from '../models/model';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css','../app.component.css']
})
export class MatchComponent implements OnInit {

  matchesByType = [];
  selectedTeam = '';
  selectedMatch = '';
  selectedMatchId = '';
  @Input() template_id: any;
  matchlistloading = true;
  userEmail = ''
  allowmatchbetting = false;
  users = [];
  currentfantasymatch;
  userPlayer;
  myteam;
  


  
  constructor(private appService: AppService) { }

  ngOnInit() {
     this.userEmail = localStorage.getItem('useremail');
  	 this.getUpcomingMatchByTemplate();
  }

  getUpcomingMatchByTemplate(){
    this.matchlistloading = true;
    this.appService.getUpcomingMatches(localStorage.getItem('useremail') ,this.template_id).subscribe
    (matchData => {
      this.matchlistloading = false;
      this.matchesByType = matchData.matches;      
    });
  }

  ngOnChanges() {
    this.getUpcomingMatchByTemplate();    
  }
  
  selectTeamforBet(match, team)
  {
    this.selectedMatchId = match.matchId;
    this.selectedTeam = team;
    this.selectedMatch = match.team1Name + ' vs ' + match.team2Name;
  }

  bet() {
    this.matchlistloading = true;
    let prediction_list = []
    let prediction: Prediction = <Prediction>{};
    prediction.matchId = parseInt(this.selectedMatchId);
    prediction.userEmail = localStorage.getItem('useremail')
    prediction.prediction = this.selectedTeam
    prediction_list.push(prediction)
    this.appService.vote(prediction_list).subscribe
    (voteData => {
      this.matchlistloading = false;
      this.getUpcomingMatchByTemplate();
    });

    return;
  }

  updateTeam(user){
    this.matchlistloading = true;
    this.appService.getPlayersForMatchForUser(this.currentfantasymatch.matchId,user.userEmail).subscribe
    (PlayerData => {
      this.matchlistloading = false;
      this.userPlayer = PlayerData.players;  
     
    });
  }

  getUserList(match) {
    this.userPlayer = null;    
    this.currentfantasymatch = match;
    this.matchlistloading = true;
    this.appService.getAllUserList().subscribe
    (userData => {
      this.matchlistloading = false;
      this.users = userData.users;      
    });
  }

  getAllPlayersForMatch(match) {
    this.userPlayer = null;    
    this.matchlistloading = true;
    this.currentfantasymatch = match;
    this.appService.getPlayersForMatch(match.matchId).subscribe
    (PlayerData => {
      this.matchlistloading = false;
      this.userPlayer = PlayerData.players;   
      this.getMyFantasyTeamForMatch(match);
    });
  }

  getMyFantasyTeamForMatch(match){
    this.matchlistloading = true;
    this.appService.getPlayersForMatchForUser(match.matchId,localStorage.getItem('useremail')).subscribe
    (PlayerData => {
      this.matchlistloading = false;
      this.myteam = PlayerData; 
      for (let p of this.userPlayer){
        if(this.myteam.players.some(el => el.player_id === p.player_id)){
          p.checked = true;
        }else{
          p.checked = false;
        }
      }
    });
  }

  updateMyTeam(player){
    console.log(player);
    if(player.checked){
      this.myteam.remainingCredit = this.myteam.remainingCredit - player.rating;
      this.myteam.players.push(player);
    }
    else{
      this.myteam.remainingCredit = this.myteam.remainingCredit + player.rating;
      const index: number = this.myteam.players.indexOf(player);
      if (index !== -1) {
        this.myteam.players.splice(index, 1);
      }      
    }
  }

  createMyTeam(){
    this.matchlistloading = true;
    const players = this.myteam.players;
    const team = new PlayerData();
    team.players = players;
    team.captain = this.myteam.captain;
    team.viceCaptain = this.myteam.viceCaptain;
    console.log(team);
    this.appService.setPlayersForMatchForUser(this.currentfantasymatch.matchId,localStorage.getItem('useremail'),team).subscribe
    (PlayerData => {
      this.matchlistloading = false;
      console.log(PlayerData);
    });
  }

}
