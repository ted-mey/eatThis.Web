import { EatThisPage } from './app.po';

describe('eat-this App', () => {
  let page: EatThisPage;

  beforeEach(() => {
    page = new EatThisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
