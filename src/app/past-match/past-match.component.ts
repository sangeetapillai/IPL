import { Component, OnInit,Input } from '@angular/core';
import {AppService} from '../app.service';
import {User} from '../models/model';

@Component({
  selector: 'app-past-match',
  templateUrl: './past-match.component.html',
  styleUrls: ['./past-match.component.css','../match/match.component.css','../app.component.css']
})
export class PastMatchComponent implements OnInit {

  pastMatchesByType = [];
  userEmail = '';
  matchlistloading = true;
  @Input() template_id: any;
  constructor(private appService: AppService) { }

  ngOnInit() {  	 
    this.userEmail = 'Sangeeta'
    this.getPastMatchesWithUserResult();
  }

  ngOnChanges() {
    this.getPastMatchesWithUserResult();    
  }
  
  getPastMatchesWithUserResult(){
    this.matchlistloading = true;
    const user = new User();
    user.userEmail = this.userEmail;
    this.appService.getPastMatchesWithUserResult(user,this.template_id).subscribe
    (matchData => {
      this.matchlistloading = false;
      this.pastMatchesByType = matchData.matches;      
    });
  }

  

}
