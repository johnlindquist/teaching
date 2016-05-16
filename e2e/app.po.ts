export class TeachingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('teaching-app h1')).getText();
  }
}
