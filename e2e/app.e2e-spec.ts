import { AngularCoverageSamplePage } from './app.po';

describe('angular-coverage-sample App', () => {
  let page: AngularCoverageSamplePage;

  beforeEach(() => {
    page = new AngularCoverageSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
