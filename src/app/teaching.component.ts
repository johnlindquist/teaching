import { Component } from '@angular/core';
import { HomeComponent } from './+home';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { TeamComponent } from './+team';
import { DetailComponent } from './+detail';
import { TeamService } from './shared';


@Component({
  moduleId: module.id,
  selector: 'teaching-app',
  templateUrl: 'teaching.component.html',
  styleUrls: ['teaching.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, TeamService]
})
@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/team', component: TeamComponent},
  {path: '/detail/:id', component: DetailComponent}
])
export class TeachingAppComponent {
  title = 'teaching works!';
}
