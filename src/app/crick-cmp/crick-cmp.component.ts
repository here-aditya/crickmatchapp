import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crick-cmp',
  templateUrl: './crick-cmp.component.html',
  styleUrls: ['./crick-cmp.component.css']
})


export class CrickCmpComponent implements OnInit {
  teamsData;
  playersData;
  teamMatchData;
  selTeamName;
  leagueData;
  playerDtls;
  hostUrl = 'http://localhost/crickmatch/public/';

  constructor(private http: HttpClient) { 
  }
  
  ngOnInit() {
  }

  displaydata(event, funcName, dataObj) {
    if(funcName == 'showTeams') {
      this.playersData = this.teamMatchData = this.leagueData = this.playerDtls = null;
      this.teamsData = dataObj.data;
    } else if(funcName == 'showPlayers') {
      this.teamsData = this.teamMatchData = this.leagueData = this.playerDtls = null;
      this.playersData = dataObj.data;
      this.selTeamName = this.playersData[0].team_name;
    } else if(funcName == 'showMatchReport') {
      this.teamsData = this.playersData = this.leagueData = this.playerDtls = null;
      this.teamMatchData = dataObj.data;
    } else if(funcName == 'showPoints') {
      this.teamsData = this.playersData = this.teamMatchData = this.playerDtls = null;
      this.leagueData = dataObj.data;
    } else if(funcName == 'showPlayer') {
      this.teamsData = this.playersData = this.teamMatchData = this.leagueData = null;
      dataObj.data[0].history = JSON.parse(dataObj.data[0].history);
      this.playerDtls = dataObj.data;
    } 
  }

  showTeamsFunc(event) {
    this.http.
      get(this.hostUrl+"api/teams").
      subscribe((dataObj) => this.displaydata(event, 'showTeams', dataObj));
  }

  showPlayersFunc(event, teamId) {
    this.http.
      get(this.hostUrl+"api/players/"+teamId).
      subscribe((dataObj) => this.displaydata(event, 'showPlayers', dataObj))
  }

  showMatchReportFunc(event, teamId, teamName) {
    this.http.
      get(this.hostUrl+"api/matches/"+teamId).
      subscribe((dataObj) => this.displaydata(event, 'showMatchReport', dataObj))
  }

  showPointsFunc(event) {
    this.http.
      get(this.hostUrl+"api/showpoints").
      subscribe((dataObj) => this.displaydata(event, 'showPoints', dataObj))
  }

  showPlayerDtlsFunc(event, playerId) {
    this.http.
      get(this.hostUrl+"api/playerdetails/"+playerId).
      subscribe((dataObj) => this.displaydata(event, 'showPlayer', dataObj))
  }
}
