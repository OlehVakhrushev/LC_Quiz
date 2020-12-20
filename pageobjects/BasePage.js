
export default class BasePage {
  get homePageLink () {
    return $('.site-name');
  }

  get header () {
    return $('h1');
  }

  open (path) {
    return browser.url(path);
  }
};
