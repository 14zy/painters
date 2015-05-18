//<!-- Yandex.Metrika counter -->
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter24594722 = new Ya.Metrika({id:24594722,
                    webvisor:false,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");



$('#mc-embedded-subscribe-form').submit(function () {
  
  function IsEmail(email) {
      var regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return regex.test(email);
  };

  if (IsEmail($('#mce-EMAIL')[0].value)) {
    var data = "email=" + $('#mce-EMAIL')[0].value;
    $.ajax({
        type: 'POST',
        url: '//artchallenge.me/post.php',
        data: data,
        error: function()
        {
          swal({
            title: "Ошибка!",
            type: "error",
            text: "Что-то пошло не так :("
          });
        },
        success: function(response)
        {
          swal({
            title: "Art Challenge",
            type: "success",
            text: "Вы успешно подписались на рассылку!"
          });
        }});
  
  } else {
    swal({
      title: "Ошибка!",
      type: "warning",
      text: "Проверьте правильность написания email"
    });
  };
 yaCounter24594722.reachGoal('SUBSCRIBE');
 return false;
});


//boomstarter

// $( document ).ready(function() {
//
// 	window.promoImg = Math.floor(( Math.random() * 6 )) + 1;
// 	window.promoTextId = Math.floor(( Math.random() * 6 )) + 1;
//
// 	switch(window.promoTextId) {
// 	  case 1:
// 		window.promoText = "Поддержите разработку мобильного приложения!";
// 		break;
// 	  case 2:
//   		window.promoText = "Скоро будет мобильное приложение!";
//   		break;
// 	  case 3:
//   		window.promoText = "Мобильное приложение Art Challenge";
//   		break;
// 	  case 4:
//   		window.promoText = "Мы разрабатываем мобильное приложение!";
//   		break;
// 	  case 5:
// 		window.promoText = "Господа, поддержите нас на Boomstarter";
// 		break;
// 	  case 6:
// 		window.promoText = "Господа, мобильное приложение!";
// 		break;
//
// 	};
//
// 	$( "#promo-text" ).text(window.promoText);
// 	$( "#promo-img" ).attr("src","pics/promo/iphone" + window.promoImg + ".png")
//
// });
//
// $( "#promo-link" ).click(function() {
//   yaCounter24594722.reachGoal('BOOMSTARTER-CLICK-1');
// });