import LessonPage from './lesson.page';

class QuizPresentPage extends LessonPage {
  get modulQuiz () {
    return $('.mt-4.mb-4.p-4.bg-light.text-dark');
  }

  get headerQuiz () {
    return $('h2');
  }
};

module.exports = new QuizPresentPage();
