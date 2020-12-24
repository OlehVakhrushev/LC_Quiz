import BasePage from './BasePage';

class TopMenu extends BasePage {
  get coursesTab () {
    return $('div[data-qa="topmenu-Courses"]');
  };

  get cardsTab () {
    return $('div[data-qa="topmenu-Cards"]');
  }

  get diaryTab () {
    return $('div[data-qa="topmenu-Diary"]');
  }

  get groupsTab () {
    return $('div[data-qa="topmenu-Groups"]');
  }

  get challengesTab () {
    return $('div[data-qa="topmenu-Challenges"]');
  }

  get shopTab () {
    return $('div[data-qa="topmenu-Shop"]');
  }

  get chatTab () {
    return $('div[data-qa="topmenu-Chat"]');
  }

  get goalsTab () {
    return $('div[data-qa="topmenu-Goals"]');
  }

  openCourses () {
    this.coursesTab.click();
  }

  openCards () {
    this.cardsTab.click();
  }

  openDiary () {
    this.diaryTab.click();
  }

  openGroups () {
    this.groupsTab.click();
  }

  openChallenges () {
    this.challengesTab.click();
  }

  openShop () {
    this.shopTab.click();
  }

  openChat () {
    this.chatTab.click();
  }

  openGoals () {
    this.goalsTab.click();
  }
}

module.exports = new TopMenu();
