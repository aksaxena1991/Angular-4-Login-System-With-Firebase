import { FirebaseWithAngular2Page } from './app.po';

describe('firebase-with-angular2 App', function() {
  let page: FirebaseWithAngular2Page;

  beforeEach(() => {
    page = new FirebaseWithAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
