import {BaylerCliAngularPage} from "./app.po";

describe('bayler-cli-angular App', function() {
  let page: BaylerCliAngularPage;

  beforeEach(() => {
    page = new BaylerCliAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Weingut Bayler');
  });
});
