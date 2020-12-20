import BasePage from './BasePage';

class UserMenu extends BasePage {
  get userMenu () {
    return $$('.ant-dropdown-trigger.ant-dropdown-link');
  };

  get logoutBtn () {
    return $('[data-qa="logout"]');
  }

  openMenuList () {
    this.userMenu.click();
  }

  logout () {
    this.logoutBtn.click();
  }
}

module.exports = new UserMenu();
