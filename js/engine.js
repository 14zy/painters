function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
    {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
  return "";
};

function setLang(lang) {
  if (window.lang != null) {
    document.getElementById(window.lang).className="lang";
  }
  window.lang = lang;
  i18n.init({ lng: lang });
  i18n.init(function(t) {
      // translate nav
      $(".desc").i18n({lng: lang});

      // programatical access
      //var appName = t("app.name");
      //window.message = t("app.message");
  });
  document.getElementById(lang).className="lang-active";
};

function load() {
  var lang = window.navigator.userLanguage || window.navigator.language;
  lang = lang.toLowerCase();
  setLang(lang);
  removeUTMs();
  document.cookie = "wins=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  begood(getCookie("begood"));
  window.errorDelay = 8000;
  if (document.getElementById("art").width <= 400) {
    window.errorDelay = 4000;        
  };
  getart();
};


function getart() { 
  currentWins();
  var art = document.getElementById("art");
  window.truePainter = Math.floor((Math.random()*56)+1);
  
  $.getJSON("painters/" + window.truePainter + "/data.json", function(json) {
      window.image = Math.floor((Math.random()*json.paintings.length)+1);
      art.src = "https://dl.dropboxusercontent.com/u/15486902/painters/" + truePainter + "/" + window.image + ".jpg"
      window.truePainterName = json.name.ru;
      window.link = json.link.local;
      window.years = json.years;
      window.nation = json.nationality.ru;
      window.genre = json.genre.ru;
      putButtons(json.name.ru);
  });

  puticons();
};

function removeUTMs() {
  if (/utm_/.test(location.search) && window.history.replaceState){

    // thx @cowboy for the revised hash param magic.
    var oldUrl = location.href;
    var newUrl = oldUrl.replace(/\?([^#]*)/, function(_, search) {
      search = search.split('&').map(function(v) {
        return !/^utm_/.test(v) && v;
      }).filter(Boolean).join('&'); // omg filter(Boolean) so dope.
      return search ? '?' + search : '';
    });

    if ( newUrl != oldUrl ) {
      window.history.replaceState({},'', newUrl);
    }

  }
};

function currentWins() {
  if (getCookie('wins') > 1) {
    window.counter = getCookie('wins');
  }
  else {window.counter = 1}
};

function putButtons(painter) {
  function randomPainter() {
    switch (Math.floor((Math.random()*56)+1))
    {
    case 1:
      painterName = "Амедео Модильяни";
      break;
    
    case 2:
      painterName = "Анри Лебаск";
      break;
    
    case 3:
      painterName = "Архип Куинджи";
      break;
    
    case 4:
      painterName = "Василий Кандинский";
      break;
    
    case 5:
      painterName = "Василий Суриков";
      break;
    
    case 6:
      painterName = "Виктор Борисов-Мусатов";
      break;
    
    case 7:
      painterName = "Диего Ривера";
      break;
    
    case 8:
      painterName = "Иван Шишкин";
      break;
    
    case 9:
      painterName = "Клод Моне";
      break;
    
    case 10:
      painterName = "Константин Юон";
      break;

    case 11:
      painterName = "Николай Рерих"
      break;

    case 12:
      painterName = "Орест Кипренский";
      break;
    
    case 13:
      painterName = "Кузьма Петров-Водкин";
      break;

    case 14:
      painterName = "Рене Магритт";
      break;

    case 15:
      painterName = "Сальвадор Дали";
      break;

    case 16:
      painterName = "Сергей Виноградов";
      break;

    case 17:
      painterName = "Эдуард Мане";
      break;

    case 18:
      painterName = "Эндрю Уайет";
      break;

    case 19:
      painterName = "Андрей Рублёв";
      break;

    case 20:
      painterName = "Виктор Васнецов";
      break;
    
    case 21:
      painterName = "Винсент Ван Гог";
      break;
    
    case 22:
      painterName = "Густав Климт";
      break;
    
    case 23:
      painterName = "Иван Айвазовский";
      break;
    
    case 24:
      painterName = "Иероним Босх";
      break;
    
    case 25:        
      painterName = "Илья Репин";
      break;

    case 26:        
      painterName = "Казимир Малевич";
      break;

    case 27:        
      painterName = "Михаил Врубель";
      break;

    case 28:        
      painterName = "Пабло Пикассо";
      break;

    case 29:        
      painterName = "Питер Рубенс";
      break;

    case 30:        
      painterName = "Пьер Огюст Ренуар";
      break;

    case 31:        
      painterName = "Феофан Грек";
      break;

    case 32:        
      painterName = "Франсиско Гойя";
      break;

    case 33:        
      painterName = "Фрида Кало";
      break;

    case 34:        
      painterName = "Эль Греко";
      break;
    
    case 35:        
      painterName = "Альбрехт Дюрер";
      break;
    
    case 36:        
      painterName = "Альфред Сислей";
      break;

    case 37:        
      painterName = "Борис Кустодиев";
      break;

    case 38:        
      painterName = "Карл Брюллов";
      break;

    case 39:        
      painterName = "Питер Брейгель";
      break;

    case 40:        
      painterName = "Марк Шагал";
      break;
    
    case 41:        
      painterName = "Джотто ди Бондоне";
      break;

    case 42:        
      painterName = "Сандро Боттичелли";
      break;

    case 43:        
      painterName = "Караваджо";
      break;

    case 44:        
      painterName = "Зинаида Серебрякова";
      break;

    case 45:        
      painterName = "Леонардо да Винчи";
      break;

    case 46:        
      painterName = "Диего Веласкес";
      break;
    
    case 47:        
      painterName = "Василий Верещагин";
      break;

    case 48:        
      painterName = "Исаак Левитан";
      break;

    case 49:        
      painterName = "Анри Матисс";
      break;

    case 50:        
      painterName = "Ян ван Эйк";
      break;

    case 51:        
      painterName = "Джон Уотерхаус";
      break;

    case 52:        
      painterName = "Эгон Шиле";
      break;

    case 53:        
      painterName = "Эдгар Дега";
      break;

    case 54:        
      painterName = "Рембрандт";
      break;

    case 55:        
      painterName = "Тициан";
      break;

    case 56:        
      painterName = "Альфонс Муха";
      break;
    };
    return painterName;
  };
  
  var painters = [painter];
  for (var i=0;i<10;i++) {
    painters.push(randomPainter());
  }
   
  //unique
  painters = painters.reverse().filter(function (e, i, painters) {
     return painters.indexOf(e, i+1) === -1;
  }).reverse(); 

  var buttons = [];
  buttons.push(painters[0]);      
  buttons.push(painters[1]);
  buttons.push(painters[2]);
  buttons.push(painters[3]);     
  
  function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

  shuffle(buttons);

  document.getElementById("btn1").innerHTML = buttons[0];
  document.getElementById("btn2").innerHTML = buttons[1];
  document.getElementById("btn3").innerHTML = buttons[2];
  document.getElementById("btn4").innerHTML = buttons[3];
};

function puticons() {
  for (var i=1; i < window.counter; i++ ) {
    document.getElementById("icon"+i).style.color = "rgb(53,115,45)";                
  } 
};


function checkAnswer(btn) { 
var answer = document.getElementById(btn).innerHTML;

if (answer == window.truePainterName) {

  document.getElementById("btn1").onclick = function() { void(0);};
  document.getElementById("btn2").onclick = function() { void(0);};
  document.getElementById("btn3").onclick = function() { void(0);};
  document.getElementById("btn4").onclick = function() { void(0);};
  document.getElementById(btn).style.background = "blue";
  document.getElementById(btn).style.borderColor = "blue";      

  var wins = parseInt(window.counter);
        
  if (wins == 10) {
    winner();
  }
  
  else {
  wins = 1 + wins;
  setCookie('wins',wins,"session");
  setTimeout(function() {refresh("good");}, 1000)
  
  new PNotify({
      title: 'Верно!',
      text: 'Вы отгадали ' + parseInt(window.counter) + " картину",
      type: 'success',
      hide: true,
      animate_speed: "normal",
      delay: 2000,
      remove: true,
      buttons: {
        closer: false,
        sticker: false
      },
      history: {
        history: true,
        menu: false
      }

  });
  yaCounter24594722.reachGoal('WIN');
  };
  
}

else {

  setTimeout(function() {refresh("bad");}, 4000)
  new PNotify({
      title: badPhrase(),
      text:  "Это же " + window.truePainterName + ".<br><br><img src='" + "painters/" + window.truePainter + "/photo.jpg' style='width: 100px;'><br><br><div style='padding: 2px;'>Годы жизни: " + window.years + "<br>Национальность: " + window.nation + "<br>Жанры: " + window.genre + "</div><br><a href='painters/" + window.link + "' class='btn btn-primary'>Узнать больше</a>",
      type: 'error',
      icon: 'glyphicon glyphicon-remove',
      hide: true,
      animate_speed: "normal",
      delay: window.errorDelay,
      remove: true,
      buttons: {
        closer: true,
        sticker: false
      },
      history: {
        history: true,
        menu: false
      }
  });

  document.cookie = "wins=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        
  document.getElementById("btn1").onclick = function() { void(0);};
  document.getElementById("btn2").onclick = function() { void(0);};
  document.getElementById("btn3").onclick = function() { void(0);};
  document.getElementById("btn4").onclick = function() { void(0);};
  document.getElementById(btn).style.background = "red";
  document.getElementById(btn).style.borderColor = "red";

  yaCounter24594722.reachGoal('FAIL');      
};
  
yaCounter24594722.reachGoal('ANSWER-CLICK');
};
    
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
};

function badPhrase() {
  if (window.goodboy == 1) {
    phrase = "Неверно!"
  }
  else {
    switch (Math.floor((Math.random()*12)+1))
    {
    case 1:
      phrase = "Да Вы обезумели!";
      break;
    
    case 2:
      phrase = "Ну как не стыдно?";
      break;

    case 3:
      phrase = "Вам нездоровится?";
      break;
    
    case 4:
      phrase = "Что за нелепость?";
      break;
    
    case 5:
      phrase = "Займитесь самообразованием!";
      break;

    case 6:
      phrase = "Как Вы могли?..";
      break;

    case 7:
      phrase = "Нет, нет и нет!";
      break;

    case 8:
      phrase = "Одумайтесь!";
      break;

    case 9:
      phrase = "А если подумать?";
      break;

    case 10:
      phrase = "Какого чёрта?!";
      break;

    case 11:
      phrase = "Бескультурье!";
      break;

    case 12:
      phrase = "Коллега!";
      break;
    };
  };
  return phrase;      
};

function winner() {
  new PNotify({
      title: 'Поздравляем!',
      text: 'Вы великолепно разбираетесь в искусcтве!<br>10 из 10 – это лучше, чем 82% людей, сыгравших в эту игру!' + "<br><br><a onclick='ShareVK();' href='#'><img style='margin-left: 25px;' width='230px'  src='winner-badge.png'></a><br><br><text style='font-size: 16px;'>Вы можете рассказать о победе в социальных сетях:<br><a onclick='ShareVK();' href='#'> <span class='glyphicon glyphicon-share-alt'></span> ВКонтакте </a><br><a onclick='ShareFB();' href='#'><span class='glyphicon glyphicon-share-alt'></span> Facebook </a><br><a onclick='ShareOD();' href='#'><span class='glyphicon glyphicon-share-alt'></span> Одноклассники </a><br><a onclick='ShareMM();' href='#'><span class='glyphicon glyphicon-share-alt'></span> Мой Мир </a></text>",
      type: 'note',
      hide: false,
      animate_speed: "normal",
      icon: "glyphicon glyphicon-thumbs-up",
      buttons: {
        closer: false,
        sticker: false
      },
      history: {
        history: true,
        menu: false
      }
      
  });
  document.getElementById("icon10").style.color = "rgb(53,115,45)";
  yaCounter24594722.reachGoal('WINNER');
};


function ShareVK() {
  url = "http://vk.com/share.php?url=http://artchallenge.ru/?utm_source=vk-win" + "&title=Господа, я отлично разбираюсь в искусстве! %23ArtChallenge&description=Попробуйте отгадать 10 художников подряд и посоревноваться со мной!&image=http://artchallenge.ru/art-challenge-winner1.png";
  window.open(url,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=604,height=401');
  yaCounter24594722.reachGoal('WINNER-SHARE-VK');
};  

function ShareFB() {      
  url = "https://www.facebook.com/dialog/feed?app_id=478531102278887&display=popup&link=http://artchallenge.ru/?utm_source=fb-win&redirect_uri=http://artchallenge.ru/1.html&picture=http://artchallenge.ru/winner-badge460.png&source=http://artchallenge.ru/winner-badge460.png&name=Господа, я отлично разбираюсь в искусстве!&caption=Art Challenge - игра на знание популярных художников";
  window.open(url,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=604,height=401');
  yaCounter24594722.reachGoal('WINNER-SHARE-FB');
};

function ShareOD() {
  url = "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st.comments=Господа, я отлично разбираюсь в искусстве!&st._surl=http://artchallenge.ru/?utm_source=od-win";
  window.open(url,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=604,height=401');
  yaCounter24594722.reachGoal('WINNER-SHARE-OD');
};

function ShareMM() {
  url = "http://connect.mail.ru/share?url=http://artchallenge.ru/?utm_source=mm-win&title=Господа, я отлично разбираюсь в искусстве!&description=Art Challenge - игра на знание популярных художников";
  window.open(url,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=604,height=401');
  yaCounter24594722.reachGoal('WINNER-SHARE-MM');
};
    
function refresh(sign){
  if (sign == "bad") {
    for (var i=1; i < 10; i++ ) {
        document.getElementById("icon"+i).style.color = "lightgray";                
    }; 
  };

  document.getElementById("btn1").onclick = function() { checkAnswer('btn1'); };
  document.getElementById("btn1").style.background = "";
  document.getElementById("btn1").style.borderColor = "";
  document.getElementById("btn2").onclick = function() { checkAnswer('btn2'); };
  document.getElementById("btn2").style.background = "";
  document.getElementById("btn2").style.borderColor = "";
  document.getElementById("btn3").onclick = function() { checkAnswer('btn3'); };
  document.getElementById("btn3").style.background = "";
  document.getElementById("btn3").style.borderColor = "";
  document.getElementById("btn4").onclick = function() { checkAnswer('btn4'); };
  document.getElementById("btn4").style.background = "";
  document.getElementById("btn4").style.borderColor = "";

  document.getElementById("art").src = "loading1.gif"
  getart();
}

function begood(value){
  if (value == 1) {
    setCookie('begood',1,360);
    window.goodboy = 1;
    document.getElementById("btnOff").style.color="black";
    document.getElementById("btnOff").style.fontWeight="bold";
    document.getElementById("btnOff").style.cursor="default";
    document.getElementById("btnOn").style.color="#428BCA";
    document.getElementById("btnOn").style.fontWeight="normal";
    document.getElementById("btnOn").style.cursor="pointer";

  };
  
  if (value == 0) {
    setCookie('begood',0,360);
    window.goodboy = 0;
    document.getElementById("btnOff").style.color="#428BCA";
    document.getElementById("btnOff").style.fontWeight="normal";
    document.getElementById("btnOff").style.cursor="pointer";
    document.getElementById("btnOn").style.color="black";
    document.getElementById("btnOn").style.fontWeight="bold";
    document.getElementById("btnOn").style.cursor="default";
  };
}