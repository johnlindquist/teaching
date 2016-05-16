import { TeachingPage } from './app.po';

describe('teaching App', function() {
  let page: TeachingPage;

  beforeEach(() => {
    page = new TeachingPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('teaching works!');
  });
});
