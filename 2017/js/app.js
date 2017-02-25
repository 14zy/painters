
function getPicture() {
  id = Math.floor((Math.random() * 118));
  picture = '21';
  $('#art').attr('src', 'http://artchallenge.me/painters/' + id + '/' + picture + '.jpg');
}
getPicture();


function answer(btn) {

  $('#screenAnswers').css('display', 'none');

  if (btn == 1) {
    wrongAnswer();
  }

  if (btn == 2) {
    rightAnswer();
  }

  if (btn == 3) {
    wrongAnswer();
  }

  if (btn == 2) {
    rightAnswer();
  }

}

function rightAnswer() {

  $('#screenRight').animateCss('bounceInDown');
  $('#screenRight').css('display', 'block');

  setTimeout(function () {
    $('#screenAnswers').animateCss('bounceInUp');
    $('#screenAnswers').css('display', 'block');
    $('#screenRight').css('display', 'none');
    getPicture();
  }, 4000);
}

function wrongAnswer() {

  $('#screenWrong').animateCss('bounceInDown');
  $('#screenWrong').css('display', 'block');

  setTimeout(function () {
    $('#screenAnswers').animateCss('bounceInUp');
    $('#screenAnswers').css('display', 'block');
    $('#screenWrong').css('display', 'none');
    getPicture();
  }, 4000);
}
