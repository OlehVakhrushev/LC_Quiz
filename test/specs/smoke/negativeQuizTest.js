import { expect } from 'chai';
import NegativePath from '../../../helpers/negativeQuizPath';
const sel = require('../../../expected/selectors.json');
const exp = require('../../../expected/expected.json');
const data = require('../../../expected/data.json');

describe('Negative Test', function () {
  afterEach(function () {
    $(sel.resetResult).click();
    browser.refresh();
    browser.pause(1500);
  });
  it('TC-001', function () {
    NegativePath();
    browser.pause(2000);
    expect($(sel.alertNameTryAgain).getProperty('innerText')).to.be.equal(exp.heyText);
    browser.pause(2000);
  });

  it('TC-002', function () {
    NegativePath();
    browser.pause(2000);
    expect($(sel.alertT).getProperty('innerText')).to.be.equal(exp.totalSolvedFailed);
    browser.pause(2000);
  });

  it('TC-003', function () {
    NegativePath();
    browser.pause(2000);
    expect($(sel.alertRecommend).getProperty('innerText')).to.be.equal(exp.recommend);
    browser.pause(2000);
  });

  it('TC-004', function () {
    NegativePath();
    browser.pause(2000);
    expect($(sel.textSecondary).getProperty('innerText')).to.be.equal(exp.legendText);
    browser.pause(2000);
  });

  it('TC-004-1', function () {
    NegativePath();
    browser.pause(2000);
    expect($$(sel.rightAnswer)[data.rightAnswer.correctAnswer].getProperty('innerHTML')).to.include(exp.greenAnswer);
    browser.pause(2000);
  });

  it('TC-004-2', function () {
    NegativePath();
    browser.pause(2000);
    expect($$(sel.rightAnswer)[data.rightAnswer.wrongAnswer].getProperty('innerHTML')).to.include(exp.redAnswer);
    browser.pause(2000);
  });
});
