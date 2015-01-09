
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
    setCookie('lang',lang,360);
    document.cookie = "wins=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    refresh("bad");
  };

  window.lang = lang;
  i18n.init({ lng: lang });
  i18n.init(function(t) {
      $(".desc").i18n({lng: lang});
      $(".head-lang").i18n({lng: lang});
      $(".yashare-auto-init").i18n({lng: lang});
      $(".footer").i18n({lng: lang});
  });
  document.getElementById("langMain").src="pics/flags/" + lang.toUpperCase() + ".png";
  document.getElementById(lang).className="lang-active";
  
  if (lang == "ru") {
    $("#subscribe")[0].style.display="block";
  } else {
    $("#subscribe")[0].style.display="none";
  }

};

function load() {
  var lang = window.navigator.userLanguage || window.navigator.language;
  lang = lang.substring(0, 2).toLowerCase();
  if (document.location.search.substring(1,5) == "lang") {
    lang = document.location.search.substring(6);
    lang = lang.substring(0, 2).toLowerCase();
  }
  langCookie = getCookie("lang");
  if (langCookie != "") {
   lang = langCookie;
  };
  if (lang == "ru" || lang == "en" || lang == "de" || lang == "fr" || lang == "it" || lang == "es" ) {
    //console.log(lang);
    setLang(lang);    
  } else {
    lang = "en";
    setLang(lang);
  };
  //removeUTMs();
  window.platform = "http://178.62.133.139/painters/" // https://dl.dropboxusercontent.com/u/15486902/painters/ || http://178.62.133.139/painters/ || file:///Users/14zy/Dropbox/Public/painters/
  document.cookie = "wins=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  window.errorDelay = 3000;
  window.pnotify = "";
  //js magic for mobiles
  if (window.innerWidth <= 600) {
    window.errorDelay = 3000;
    document.getElementById("langDropMenu").className += " pull-right";
    window.pnotify = "stack-mobile";
  };
  
  window.basicSet = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56];
  window.currentSet = basicSet;
  getart();
  begood(getCookie("begood"));
};

load();

function getart() { 
  currentWins();
  var art = document.getElementById("art");
  window.truePainter = window.currentSet[Math.floor((Math.random()*window.currentSet.length))];
  $.getJSON("painters/" + window.truePainter + "/data.json", function(json) {
      window.paintings = json.paintings.length;
      window.image = Math.floor((Math.random()*window.paintings)+1);
      art.src = window.platform + truePainter + "/" + window.image + ".jpg";
      window.truePainterName = i18n.t("painters." + truePainter, { lng: window.lang });
      window.link = json.link.local;
      if (window.lang == "ru") { //Временно, пока в json не будут ссылки на википедию на всех языках
        window.wiki = json.link.wikipedia.ru;
      } else {
        window.wiki = json.link.wikipedia.en;
      };
      window.years = json.years;
      window.bio = json.bio.ru;
      window.nation = undefined;
      json.nationality.forEach(function(entry) {
        if (window.nation == undefined) {
          window.nation = i18n.t("nation." + entry, { lng: window.lang });
        } else {
          window.nation = window.nation + ", " + i18n.t("nation." + entry, { lng: window.lang });
        }
      });
      window.genre = undefined;
      json.genre.forEach(function(entry) {
        if (window.genre == undefined) {
          window.genre = i18n.t("genre." + entry, { lng: window.lang });
        } else {
          window.genre = window.genre + ", " + i18n.t("genre." + entry, { lng: window.lang });
        }
      });
      putButtons(window.truePainterName);
  });
  puticons();
};

// function removeUTMs() {
//   if (/utm_/.test(location.search) && window.history.replaceState){
//
//     // thx @cowboy for the revised hash param magic.
//     var oldUrl = location.href;
//     var newUrl = oldUrl.replace(/\?([^#]*)/, function(_, search) {
//       search = search.split('&').map(function(v) {
//         return !/^utm_/.test(v) && v;
//       }).filter(Boolean).join('&'); // omg filter(Boolean) so dope.
//       return search ? '?' + search : '';
//     });
//
//     if ( newUrl != oldUrl ) {
//       window.history.replaceState({},'', newUrl);
//     }
//
//   }
// };

function currentWins() {
  if (getCookie('wins') > 1) {
    window.counter = getCookie('wins');
  }
  else {window.counter = 1}
};

function putButtons(painter) {
  function randomPainter() {
    var random = "painters." + Math.floor((Math.random()*56)+1)
    return i18n.t(random, { lng: window.lang });
  };
  
  var painters = [painter];
  for (var i=0;i<10;i++) {
    painters.push(randomPainter());
    if (painters[1] == "") {
      location.reload(); // bug fix на коленке, происходит когда нажимаешь "Назад" в браузере
    };
  };
   
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
      title: i18n.t("message.right", { lng: window.lang }),
      text: i18n.t("message.right-desc", { lng: window.lang, count: parseInt(window.counter) }),
      type: 'success',
      hide: true,
      animate_speed: "normal",
      delay: 2000,
      remove: true,
      addclass: window.pnotify,
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

  setTimeout(function() {refresh("bad");}, 3500)
  window.msgWrong = new PNotify({
      title: badPhrase(),
      text:  i18n.t("message.wrong-desc", { lng: window.lang }) + " " + window.truePainterName + "<br><br><img src='" + "painters/" + window.truePainter + "/photo.jpg' style='width: 100px;'><br><br><a id='btnLearnMore' onTouchStart='learnMore();' onclick='learnMore();' class='btn btn-primary'>" + i18n.t("message.learn-more", { lng: window.lang }) + "</a>",
      type: 'error',
      icon: 'glyphicon glyphicon-remove',
      hide: true,
      animate_speed: "normal",
      delay: window.errorDelay,
      remove: true,
      addclass: window.pnotify,
      mouse_reset: false,
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

function learnMore() {
  window.msgWrong.remove();
  var learnMoreText = "\
    <div id='learnMoreDiv' style='max-height: 570px; overflow: scroll;'>\
      <div id='learnMoreInfo'><p><img style='height: 200px; max-width: 170px;' src='painters/" + window.truePainter + "/photo.jpg'></p>\
      <p>"+window.years+"<br>"+window.nation+"</p>\
      <p><strong>"+i18n.t("message.genre", { lng: window.lang })+":</strong><br>"+window.genre+"</p>\
      <p><a style='' target='_blank' href='"+window.wiki+"' class='btn btn-primary'>Wikipedia <span class='glyphicon glyphicon-share-alt'></span></a></p>\
      </div>\
      <h2 style='margin: 5px 0 0 0; padding-bottom: 10px;'>"+window.truePainterName+"</h2>\
      <div id='learnMoreBio'>\
      "+window.bio+"\
      </div>\
      <div style='text-align: center; padding-top: 25px;'>\
        <img class='thumbnail' style='display: inline; max-width: 150px; height: 150px;' src='" + window.platform + window.truePainter + "/"+Math.floor((Math.random()*window.paintings)+1)+".jpg'>\
        <img class='thumbnail' style='display: inline; max-width: 150px; height: 150px;' src='" + window.platform + window.truePainter + "/"+Math.floor((Math.random()*window.paintings)+1)+".jpg'>\
        <img class='thumbnail' style='display: inline; max-width: 150px; height: 150px;' src='" + window.platform + window.truePainter + "/"+Math.floor((Math.random()*window.paintings)+1)+".jpg'>\
        <img class='thumbnail' style='display: inline; max-width: 150px; height: 150px;' src='" + window.platform + window.truePainter + "/"+Math.floor((Math.random()*window.paintings)+1)+".jpg'>\
        <img class='thumbnail' style='display: inline; max-width: 150px; height: 150px;' src='" + window.platform + window.truePainter + "/"+Math.floor((Math.random()*window.paintings)+1)+".jpg'>\
      </div>\
    </div>\
    ";
  
  new PNotify({
      text: learnMoreText,
      type: 'info',
      hide: false,
      animate_speed: "normal",
      icon: "",
      addclass: "stack-learnMore",
      buttons: {
        closer: true,
        closer_hover: false,
        sticker: false
      },
      history: {
        history: true,
        menu: false
      }
  });
  
  yaCounter24594722.reachGoal('LEARN-MORE'); return true;
  
};
    
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
};

function badPhrase() {
  if (window.goodboy == 1) {
    phrase = i18n.t("message.wrong", { lng: window.lang });
  }
  else {
    var phrase = "badPhrases." + Math.floor((Math.random()*12)+1)
    phrase = i18n.t(phrase, { lng: window.lang });
  };
  return phrase;      
};

function winner() {
  new PNotify({
      title: i18n.t("message.winner", { lng: window.lang }),
      text: i18n.t("message.winner-desc", { lng: window.lang }) + "<br><br><a onclick='ShareFB();' href='#'><img style='margin-left: 25px;' width='230px' src=pics/badges/winner-badge-"+window.lang+".png></a><br><br><text style='font-size: 16px;'>" + i18n.t("message.share", { lng: window.lang }) + "<br>" + getShares() + "</text>",
      type: 'note',
      hide: false,
      animate_speed: "normal",
      icon: "glyphicon glyphicon-thumbs-up",
      addclass: window.pnotify,
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

function getShares() {
  
  switch (window.lang)
  {
  case "ru":
    shares = "<a onclick='ShareVK();' href='#'> <span class='glyphicon glyphicon-share-alt'></span> ВКонтакте </a><br><a onclick='ShareFB();' href='#'><span class='glyphicon glyphicon-share-alt'></span> Facebook </a><br><a onclick='ShareOD();' href='#'><span class='glyphicon glyphicon-share-alt'></span> Одноклассники </a><br><a onclick='ShareMM();' href='#'><span class='glyphicon glyphicon-share-alt'></span> Мой Мир </a>";
    break;
      
  default:
    shares = "<a onclick='ShareFB();' href='#'><span class='glyphicon glyphicon-share-alt'></span> Facebook </a><br><a onclick='ShareTW();' href='#'> <span class='glyphicon glyphicon-share-alt'></span> Twitter </a><br><a onclick='ShareVK();' href='#'> <span class='glyphicon glyphicon-share-alt'></span> VKontakte </a>";
    break;
  };
  
  return shares;
};


function ShareFB() {
  url = "https://www.facebook.com/dialog/feed?app_id=478531102278887&display=popup&link=http://artchallenge.ru/?utm_source=fb-win&redirect_uri=http://artchallenge.ru/1.html&picture=http://artchallenge.ru/pics/badges/winner-badge-"+window.lang+"-shareFB.png&source=http://artchallenge.ru/pics/badges/winner-badge-"+window.lang+"-shareFB.png&name="+i18n.t("shares.title",{lng: window.lang})+"&caption="+i18n.t("shares.caption",{lng: window.lang})+"&description="+i18n.t("shares.description",{lng: window.lang});      
  window.open(url,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=604,height=401');
  yaCounter24594722.reachGoal('WINNER-SHARE-FB');
};

function ShareTW() {
  url = "http://twitter.com/share?text="+i18n.t("shares.title",{lng: window.lang})+" http://artchallenge.ru/pics/badges/winner-badge-"+window.lang+"-shareTW.png &url=http://artchallenge.ru/&hashtags=artchallenge";
  window.open(url,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=604,height=401');
  yaCounter24594722.reachGoal('WINNER-SHARE-TW');
};

function ShareVK() {
  url = "http://vk.com/share.php?url=http://artchallenge.ru/?utm_source=vk-win&title="+i18n.t("shares.title",{lng: window.lang})+" %23ArtChallenge&description="+i18n.t("shares.description",{lng: window.lang})+"&image=http://artchallenge.ru/pics/badges/winner-badge-"+window.lang+"-shareVK.png&noparse=true";
  window.open(url,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=604,height=401');
  yaCounter24594722.reachGoal('WINNER-SHARE-VK');
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

  document.getElementById("art").src = "pics/loading.svg";
  //window.scrollTo(0, 0);
  $("html, body").animate({ scrollTop: 120 }, "slow");
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