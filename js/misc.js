//<!-- Yandex.Metrika counter -->
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter24594722 = new Ya.Metrika({id:24594722,
                    webvisor:true,
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