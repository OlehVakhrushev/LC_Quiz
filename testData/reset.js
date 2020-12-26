const axios = require('axios');
let data = '';

describe('Reset', function () {
  let a = {
    method: 'delete',
    url: 'https://server-stage.pasv.us/quiz/answergroup/reset/5fb329422c349b006a20a47e',
    headers: {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIwNzA1X2FkbWluQGdtYWlsLmNvbSIsInVzZXJJZCI6IjVmYWY0NDY4NTQ1ODg2MDA2YWZmMTkzMCIsImNvZGV3YXJzSWQiOm51bGwsImlhdCI6MTYwODk5NDQ0NywiZXhwIjoxNjA5MjUzNjQ3fQ.iZKwWtJFbkj_I48KXDsMqHXjHlDQhw36DhW1yPKaVqc'
    },
    data: data
  };

  axios(a)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  let b = {
    method: 'delete',
    url: 'https://server-stage.pasv.us/quiz/answergroup/reset/5fb45fb09d7c2f006a7e424e',
    headers: {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIwNzA1X3N0dWRlbnRAZ21haWwuY29tIiwidXNlcklkIjoiNWZiNDRjYjc5ZDdjMmYwMDZhN2U0MTgyIiwiY29kZXdhcnNJZCI6bnVsbCwiaWF0IjoxNjA4OTk0NTkwLCJleHAiOjE2MDkyNTM3OTB9.EAwh7U8KqgJ5i4FmU4X7w_j_FNHHaX0c86zOx4QJfvc'
    }
  };

  axios(b)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  let c = {
    method: 'delete',
    url: 'https://server-stage.pasv.us/quiz/answergroup/reset/5fb466a99d7c2f006a7e428c',
    headers: {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIwNzA1X2xlYXJuZXJAZ21haWwuY29tIiwidXNlcklkIjoiNWZiNDRjMjI5ZDdjMmYwMDZhN2U0MTZjIiwiY29kZXdhcnNJZCI6bnVsbCwiaWF0IjoxNjA4OTk0ODk2LCJleHAiOjE2MDkyNTQwOTZ9.w_mEatOHD6mLvpOfdTrwGVEY_79dNmCvylAeyi3GHw4'
    }
  };

  axios(c)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  let d = {
    method: 'delete',
    url: 'https://server-stage.pasv.us/quiz/answergroup/reset/5fe2677fe9861c006a8b01de',
    headers: {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIwNzA1X3RlYWNoZXJAZ21haWwuY29tIiwidXNlcklkIjoiNWZhZjZkMDc2YmM2NjAwMDZhZTgxMDk0IiwiY29kZXdhcnNJZCI6bnVsbCwiaWF0IjoxNjA4OTk1MDY2LCJleHAiOjE2MDkyNTQyNjZ9.u5ct0GNIDVYHlFpyQHJMl-o80VaoF8xmpmdh71rVaYM'
    }
  };

  axios(d)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
});
