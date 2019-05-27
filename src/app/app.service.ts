import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {TemplateData,UserData,MatchData,PlayerData} from './models/model'
@Injectable()
export class AppService {

  private apiEndpoint = 'http://3.14.70.19:8080/betterapp/service/';
  constructor(private http: HttpClient) { }

  getAllTemplates() {
    const apiURL = this.apiEndpoint + 'templates';
    return this.http.get<TemplateData>(apiURL);
  }

  getLeaderBoard(){
  	const apiURL = this.apiEndpoint + 'leaderboard';
    return this.http.get<UserData>(apiURL);
  }

  getUpcomingMatches(userEmail,template_id) {
    const apiURL = this.apiEndpoint + 'upcomingMatches?templateId='+template_id+'&userEmail=' + userEmail;
    return this.http.get<MatchData>(apiURL);
  }

 getPastMatchesWithUserResult(user,template_id) {
    const apiURL = this.apiEndpoint + 'getUserTrackRecord?templateId='+template_id;
    return this.http.post<MatchData>(apiURL, user);
  }

  vote(prediction) {
    const apiURL = this.apiEndpoint + 'vote';
    return this.http.post<UserData>(apiURL, prediction);
  }

  getAllUserList(){
    const apiURL = this.apiEndpoint + 'allusers';
    return this.http.get<UserData>(apiURL); 
  }

  getPlayersForMatchForUser(matchId,userEmail){
    const apiURL = this.apiEndpoint + 'getPlayersForMatchForUser?matchId='+matchId+'&userEmail=' + userEmail;
    return this.http.get<PlayerData>(apiURL); 
  }

  getPlayersForMatch(matchId){
    const apiURL = this.apiEndpoint + 'getPlayersForMatch?matchId='+matchId;
    return this.http.get<PlayerData>(apiURL); 
  }

  setPlayersForMatchForUser(matchId,userEmail,team){          
    const apiURL = this.apiEndpoint + 'setPlayersForMatchForUser?matchId='+matchId+'&userEmail=' + userEmail;;
    return this.http.post<PlayerData>(apiURL,team);  
  }


}
