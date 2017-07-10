import { MyAPPPage } from './app.po';

describe('my-app App', () => {
  let page: MyAPPPage;

  beforeEach(() => {
    page = new MyAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
