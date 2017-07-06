import { TelanganaDictionaryWebPage } from './app.po';

describe('telangana-dictionary-web App', () => {
  let page: TelanganaDictionaryWebPage;

  beforeEach(() => {
    page = new TelanganaDictionaryWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
