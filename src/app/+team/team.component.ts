import { Component, OnInit } from '@angular/core';
import {TeamService} from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-team',
  templateUrl: 'team.component.html',
  styleUrls: ['team.component.css'],
})
export class TeamComponent implements OnInit {

  constructor(
    public team:TeamService
  ) {
  }

  ngOnInit() {
  }

}
