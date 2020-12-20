import BasePage from './BasePage';

class UserMenu extends BasePage {
  get headerProfile () {
    return $('h1');
  }

  get dropDownListAdmin () {
    return $$('.ant-dropdown-trigger.ant-dropdown-link')[1];
  };

  get dropDownList () {
    return $('.ant-dropdown-trigger.ant-dropdown-link');
  };

  get profile () {
    return $('[data-qa="profile"]');
  }

  get settings () {
    return $('[data-qa="settings"]');
  }

  get userMenu () {
    return $$('.ant-dropdown-trigger.ant-dropdown-link');
  };

  get logoutBtn () {
    return $('[data-qa="logout"]');
  }

  openDropDownList () {
    this.dropDownList.click();
  }

  openDropDownListAdmin () {
    this.dropDownListAdmin.click();
  }

  openSettings () {
    this.settings.click();
  }

  logout () {
    this.logoutBtn.click();
  }
}

module.exports = new UserMenu();
