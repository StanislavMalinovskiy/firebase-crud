import { FirebaseCrudPage } from './app.po';

describe('firebase-crud App', () => {
  let page: FirebaseCrudPage;

  beforeEach(() => {
    page = new FirebaseCrudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
