import BasePage from './BasePage';

class TopMenu extends BasePage {
  get coursesSection () {
    return $('#top-menu > div:nth-child(1) > a');
  };

  get groupsSection () {
    return $('#top-menu > div:nth-child(4) > a');
  }

  openCourses () {
    this.coursesSection.click();
  }

  openGroups () {
    this.groupsSection.click();
  }
}

module.exports = new TopMenu();
