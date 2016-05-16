import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { TeamService } from './team.service';

describe('Team Service', () => {
  beforeEachProviders(() => [TeamService]);

  it('should ...',
      inject([TeamService], (service: TeamService) => {
    expect(service).toBeTruthy();
  }));
});
