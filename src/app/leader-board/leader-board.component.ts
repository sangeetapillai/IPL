import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {

  users=  [];
  back_color=[];
  font_size = [];
  constructor(private appService: AppService) { }

  ngOnInit() {
  	this.getUsers();
    this.back_color = ['#DAA520','#c0c0c0','#cd7f32'];
    this.font_size = ['25px','23px','20px'];
  }

  getUsers(){
    this.appService.getLeaderBoard().subscribe
    (users => {
      this.users = users.users;      
    });
  }

}
