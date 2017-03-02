var painters=[];
var currentPainter="";
var answers=[];
var Lang = "ru";
var langDB = "";
var scores = 0;

$.couch.urlPrefix = "http://178.62.133.139:5994";
$.couch.db("lang").allDocs({
  include_docs: true,
  success: function(data) {
    console.log(data);
    langDB = data.rows;

    if (Lang == "ru"){
      langDB = langDB[5].doc;
    } else {
      langDB = langDB[1].doc;
    }

    loadDB();

  }
});

function loadDB() {

  $.couch.db("painters").allDocs({
    include_docs: true,
    success: function(data) {
      // console.log(data);
      painters = data.rows;
      $('#divButtons').css('display', 'block');
      $('#welcome').css('display', 'none');
      newRound();
    }
  });

}

function randomPainter() {
  return Math.floor((Math.random() * Object.keys(painters).length));
}

function getRandomPicture() {
  id = randomPainter();
  currentPainter = painters[id].doc;
  console.log(currentPainter);
  picture = Math.floor((Math.random() * Object.keys(currentPainter.paintings).length )) + 1;
  $('#art').attr('src', 'http://artchallenge.me/painters/' + currentPainter._id + '/' + picture + '.jpg');

  $('#title').html("");
  $('#year').html("");
  if(currentPainter.paintings[picture].name[Lang]){
    $('#title').html("«" + currentPainter.paintings[picture].name[Lang] + "»,");
    $('#year').html(" "+currentPainter.paintings[picture].year+ " ");
  }

  console.log(currentPainter._id);
  console.log(langDB.painters);
  $('.currentName').html( langDB.painters[currentPainter._id] );
  // $('.bioMini').html(currentPainter.bio[Lang].slice(0,200));
  $('.bio').html(currentPainter.bio[Lang]);
  $('#years').html(currentPainter.years);
}

function newRound() {
  if (window.generatingNewRound !== true) {
    window.generatingNewRound=true;
    $('#sharePlz').css('display','none');
    $('#screenWrong').css('display', 'none');
    $('#screenRight').css('display', 'none');
    $('#screenQuestion').css('display', 'block');
    // $('#screenQuestion').animateCss('bounceInUp');
    getRandomPicture();
    generateAnswers();
    $('html, body').animate({scrollTop: $("#divGame").offset().top-100}, 500);
    window.workingTimer=false;
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
    $('#btn-'+i+'-text').html( langDB.painters[answers[i-1]._id] );
    $('#btn-'+i+'-img').attr("src","http://artchallenge.me/painters/" + answers[i-1]._id + "/photo.jpg");
    $('#btn'+i).attr("painterId",answers[i-1]._id);
  }
}

function answer(btn){
  if ($('#btn'+btn).attr("painterId") == currentPainter._id) {
    rightAnswer();
  } else {
    wrongAnswer();
  }
  $('#screenQuestion').css('display','none');
  window.generatingNewRound=false;
}

function rightAnswer() {
  ++scores;
  $(".count").html(scores);
  $("#star"+scores).css("color","green").attr('class', 'fa fa-star stars');
  // $('#screenRight').animateCss('fadeIn');
  random = Math.floor((Math.random() * 20) + 1);
  $("#goodPhrase").html(langDB.goodPhrases[random]);

  $('#screenRight').css('display', 'block');
  $('#rightPhoto').attr('src', 'http://artchallenge.me/painters/'+currentPainter._id+'/photo.jpg');

  setTimeout(function () {newRound();}, 1000);
}

function wrongAnswer() {
  window.workingTimer=true;
  $(".count").html(scores);
  // scores = 0;
  // $(".stars").css("color","#6c7279").attr('class', 'fa fa-star-o stars');
  // $('#screenWrong').animateCss('fadeIn');
  random = Math.floor((Math.random() * 12) + 1);
  $("#badPhrase").html(langDB.badPhrases[random]);
  $('#screenWrong').css('display', 'block');
  $('#wrongPhoto').attr('src', 'http://artchallenge.me/painters/'+currentPainter._id+'/photo.jpg');

  setTimeout(function () {
    $(".stars").css("color","#6c7279").attr('class', 'fa fa-star-o stars');
  }, 2000);

  window.timer = 6000;
  if (scores > 3) {
    $('#sharePlz').css('display','block');
    window.timer = 100000;
  }
  scores = 0;
  newRoundTimer = setTimeout(function () {
  if (window.workingTimer === true){
    alert('new round');
    newRound();
  }
  }, window.timer);
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
