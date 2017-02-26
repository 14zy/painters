var painters=[];
var currentPainter="";
var answers=[];
var Lang = "en";
var langDB = "";
var scores = 0;

$.couch.urlPrefix = "http://178.62.133.139:5994";
$.couch.db("painters").allDocs({
  include_docs: true,
  success: function(data) {
    // console.log(data);
    painters = data.rows;
    $('#divButtons').css('display', 'block');
    newRound();
  }
});

$.couch.db("lang").allDocs({
  include_docs: true,
  success: function(data) {
    // console.log(data);
    langDB = data.rows;
  }
});

function randomPainter() {
  return Math.floor((Math.random() * Object.keys(painters).length));
}

function getRandomPicture() {
  id = randomPainter();
  currentPainter = painters[id].doc;
  console.log(currentPainter);
  picture = Math.floor((Math.random() * Object.keys(currentPainter.paintings).length )) + 1;
  $('#art').attr('src', 'http://artchallenge.me/painters/' + currentPainter._id + '/' + picture + '.jpg');

  if(currentPainter.paintings[picture].name[Lang]){
    $('#title').html(currentPainter.paintings[picture].name[Lang]);
    $('#year').html(" "+currentPainter.paintings[picture].year+ " ");
  }

  $('.currentName').html(currentPainter.name);
  $('.bioMini').html(currentPainter.bio[Lang].slice(0,100));
  $('.bio').html(currentPainter.bio[Lang].slice(100,-1));
}

function newRound() {
  if (window.generatingNewRound !== true) {
    window.generatingNewRound=true;
    $('#screenWrong').css('display', 'none');
    $('#screenRight').css('display', 'none');
    $('#screenQuestion').css('display', 'block');
    // $('#screenQuestion').animateCss('bounceInUp');
    getRandomPicture();
    generateAnswers();
    $('html, body').animate({scrollTop: $("#divGame").offset().top-100}, 500);
  }
}

function generateAnswers() {
  answers=[];
  answers.push(currentPainter);
  answers.push(painters[randomPainter()].doc);
  answers.push(painters[randomPainter()].doc);
  answers.push(painters[randomPainter()].doc);
  answers.push(painters[randomPainter()].doc);
  answers.push(painters[randomPainter()].doc);
  answers.push(painters[randomPainter()].doc);
  answers.push(painters[randomPainter()].doc);
  answers.push(painters[randomPainter()].doc);
  answers.push(painters[randomPainter()].doc);
  answers.push(painters[randomPainter()].doc);
  answers.push(painters[randomPainter()].doc);

  //unique
  answers = answers.reverse().filter(function(e, i, answers) {
    return answers.indexOf(e, i + 1) === -1;
  }).reverse();

  answers = answers.slice(0,4);
  shuffle(answers);

  for (i = 1; i <= 4; i++) {
    $('#btn-'+i+'-text').html(answers[i-1].name);
    $('#btn-'+i+'-img').attr("src","http://artchallenge.me/painters/" + answers[i-1]._id + "/photo.jpg");
    $('#btn'+i).attr("painterId",answers[i-1]._id);
  }
}

function answer(btn){
  if ($('#btn'+btn).attr("painterId") == currentPainter._id) {
    rightAnswer();
    ++scores;
    $("#star"+scores).css("color","green").attr('class', 'fa fa-star stars');

  } else {
    wrongAnswer();
    scores = 0;
    $(".stars").css("color","#6c7279").attr('class', 'fa fa-star-o stars');

  }
  $('#screenQuestion').css('display','none');
  window.generatingNewRound=false;
}

function rightAnswer() {
  // $('#screenRight').animateCss('fadeIn');
  $('#screenRight').css('display', 'block');
  $('#rightPhoto').attr('src', 'http://artchallenge.me/painters/'+currentPainter._id+'/photo.jpg');

  // setTimeout(function () {newRound();}, 5000);
}

function wrongAnswer() {
  // $('#screenWrong').animateCss('fadeIn');
  $('#screenWrong').css('display', 'block');
  $('#wrongPhoto').attr('src', 'http://artchallenge.me/painters/'+currentPainter._id+'/photo.jpg');

  // setTimeout(function () {newRound();}, 5000);
}

// $.couch.db("painters").openDoc(window.truePainter.toString(), {
//         success: function(data) {
//
//
//       data.paintings[window.image.id-1].name[window.langDB] = pictureName;
//       data.paintings[window.image.id-1].year = pictureYear;
//
//       // console.log(data);


//
// $.couch.db("painters").openDoc(companyId.toString(), {
//   success: function(data) {
//     company = data;
//     fillPage();
//   },
//   error: function(status) {
//     console.log(status);
//     swal("Ошибка", "Произошла ошибка при подключении к базе данных. Пожалуйста, обратитесь в техподдержку", 'error');
//   }
// });
