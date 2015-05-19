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

$( document ).ready(function() {

	window.promoImg = Math.floor(( Math.random() * 10 )) + 1;
	window.promoTextId = Math.floor(( Math.random() * 8 )) + 1;
	window.promoTextColorId = Math.floor(( Math.random() * 4 )) + 1;

	switch(window.promoTextId) {
	  case 1:
		window.promoText = "Поддержите разработку мобильного приложения!";
		break;
	  case 2:
  		window.promoText = "Скоро будет мобильное приложение!";
  		break;
	  case 3:
  		window.promoText = "Мобильное приложение Art Challenge";
  		break;
	  case 4:
  		window.promoText = "Мы разрабатываем мобильное приложение!";
  		break;
	  case 5:
		window.promoText = "Господа, поддержите нас на Boomstarter";
		break;
	  case 6:
		window.promoText = "Господа, мобильное приложение!";
		break;
	  case 7:
		window.promoText = "Приложение не появится без Вашей помощи!";
		break;
	  case 8:
		window.promoText = "Господа, помогите нам с приложением!";
		break;
	};
	
	switch(window.promoTextColorId) {
	  case 1:
		window.promoTextColor = "black";
		break;
	  case 2:
		window.promoTextColor = "#a94442"; //red
  		break;
	  case 3:
		window.promoTextColor = "#337ab7"; //blue
  		break;
	  case 4:
		window.promoTextColor = "#15cb63"; //green
		break;

	};

	$( "#promo-text" ).text(window.promoText);
	$( "#promo-img" ).attr("src","pics/promo/iphone" + window.promoImg + ".png");
	$( "#promo-link" ).css( "color", window.promoTextColor );

});

$( "#promo-link" ).click(function() {
	
	var currentDate = new Date()
	
	var data = "click=" 
	+ currentDate.getDate() 
	+ "." + currentDate.getMonth()+1 
	+ "." + currentDate.getFullYear() 
	+ "; " + currentDate.getHours() 
	+ ":" + currentDate.getMinutes() 
	+ "; " + window.promoTextId 
	+ "; " + window.promoText 
	+ "; " + window.promoImg
	+ "; " + window.promoTextColor
	+ "; " + window.promoTextColorId;
		
    $.ajax({
        type: 'POST',
        url: 'http://178.62.133.139/analytics/post.php',
        data: data,
        error: function()
        {
			console.log('error');
        },
        success: function(response)
        {
			console.log('success');
        }});
	
	
  yaCounter24594722.reachGoal('PROMO-CLICK');
});