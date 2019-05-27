export class Template {
   templateId: number;
   templateName: string;
   description: string;   
}
export class User{
  userName:string;
  userPassword:string;
  userEmail:string;
  userPoints:number;
  matchesWon:number;
  matchesLost:number;  
  rank:number;

}
export class Prediction {
  userEmail: string;
  matchId: number;
  prediction: string;
}
export class TemplateData {
  message: string;
  statusCode: string;
  templateList: Template[];
}
export class UserData {
  message: string;
  statusCode: string;
  users: User[];
}

export class Match {
   matchId: number;
   team1Name: string;
   team2Name: string;
   bounty: number;
   matchTime: string;
   timeLeft: string;
   openForVote: boolean;
   creditToPlay: number;
   voted: boolean;
   winner: string;
   resultOfUser: string;
   userPointsEarned: string;
   votedFor:string;
   t1:string;
   t2:string
}


export class MatchData {
  message: string;
  statusCode: string;
  matches: Match[];
}

export class Player {
  team_id : number ;
  team_name : string;
  player_id : number;
  player_name: string;
  player_type: string;
  spec: string;
  profile_link: string;
  rating : number ;
  checked:boolean;
}

export class PlayerData {
  message: string;
  statusCode: string;
  captain: number;
  viceCaptain:number;
  remainingCredit : number;
  players: Player[];
}