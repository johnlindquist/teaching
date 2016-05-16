import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TeachingAppComponent } from '../app/teaching.component';

beforeEachProviders(() => [TeachingAppComponent]);

describe('App: Teaching', () => {
  it('should create the app',
      inject([TeachingAppComponent], (app: TeachingAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'teaching works!\'',
      inject([TeachingAppComponent], (app: TeachingAppComponent) => {
    expect(app.title).toEqual('teaching works!');
  }));
});
