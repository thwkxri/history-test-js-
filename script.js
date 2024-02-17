function history_test() {
  let score = '';
  if (document.getElementsByName('q1')[0].checked) {
    score = '1';
  }

  document.getElementById('score').textContent = `Правильных ответов: ${score}`;
}