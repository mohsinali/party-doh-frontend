import { PartyDohPage } from './app.po';

describe('party-doh App', () => {
  let page: PartyDohPage;

  beforeEach(() => {
    page = new PartyDohPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
