import { AngularCodableTimelineDemosPage } from './app.po';

describe('angular-codable-timeline-demos App', () => {
  let page: AngularCodableTimelineDemosPage;

  beforeEach(() => {
    page = new AngularCodableTimelineDemosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
