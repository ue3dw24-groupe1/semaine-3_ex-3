import { GameTrackerPage } from './app.po';

describe('game-tracker App', () => {
  let page: GameTrackerPage;

  beforeEach(() => {
    page = new GameTrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
