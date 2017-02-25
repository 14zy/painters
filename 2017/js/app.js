$.couch.urlPrefix = "http://178.62.133.139:5994";
function getPicture() {
  id = Math.floor((Math.random() * 118));
  picture = Math.floor((Math.random() * 50));
  $('#art').attr('src', 'http://artchallenge.me/painters/' + id + '/' + picture + '.jpg');
}

function answer(btn){
  if(btn==1){wrongAnswer();}
  if(btn==2){rightAnswer();}
  if(btn==3){wrongAnswer();}
  if(btn==4){rightAnswer();}
  $('#screenQuestion').css('display','none');
  window.generatingNewRound=false;
}

function rightAnswer() {
  // $('#screenRight').animateCss('fadeIn');
  $('#screenRight').css('display', 'block');
  setTimeout(function () {
    newRound();
  }, 5000);
}

function wrongAnswer() {
  // $('#screenWrong').animateCss('fadeIn');
  $('#screenWrong').css('display', 'block');
  // setTimeout(function () {
  //   newRound();
  // }, 3000);
}

function newRound() {
  if (window.generatingNewRound !== true) {
    window.generatingNewRound=true;
    $('#screenWrong').css('display', 'none');
    $('#screenRight').css('display', 'none');
    $('#screenQuestion').css('display', 'block');
    $('#screenQuestion').animateCss('bounceInUp');
    getPicture();

    $('html, body').animate({
      scrollTop: $("#divGame").offset().top
    }, 500);

  }
}

newRound();

// $.couch.db("painters").openDoc(window.truePainter.toString(), {
//         success: function(data) {
//
//
//       data.paintings[window.image.id-1].name[window.lang] = pictureName;
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

$.couch.db("painters").allDocs({
  include_docs: true,
  // descending: true,
  // limit: 10,
  success: function(data) {
    console.log(data);
  }
});
