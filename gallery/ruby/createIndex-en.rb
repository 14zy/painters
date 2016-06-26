require "json"


## Берем всю инфу по языку из CouchDB
lang = "en";
# lang = JSON.parse `curl -X GET http://178.62.133.139:5994/lang/ru`
#print lang["head"]["title"]




  ## Берем всю инфу по художнику из CouchDB
  # painter = JSON.parse `curl -X GET http://178.62.133.139:5994/painters/#{n}`
  # print painter["name"]

  # description =  painter["bio"][lang].sub("<p>","")[0..150].gsub(/\s\w+\s*$/, '...')

  # if painter["bio"]['en'] == ""
  #   painter["bio"]['en'] = "<p>We beg your pardon, but temporary this painter's biography is not available</p><p>If you know the good source, please contact us: <a href='mailto:report@artchallenge.ru'>report@artchallenge.ru</a>.</p>"
  # end

  # Генерим страницу
  html =  %{
    <!doctype html>
    <html lang="#{lang}">
      <head>
        <meta charset="utf-8">
        <meta name="description" content="Catalog of painters">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Art Challenge painters</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/jquery.fancybox.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/responsive.css">
        <link rel="stylesheet" href="css/animate.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

        <meta name="apple-itunes-app" content="app-id=1088982103">
        <link rel="alternate" hreflang="ru" href="http://artchallenge.ru/gallery/index-ru.html"/>
        <link rel="alternate" hreflang="en" href="http://artchallenge.ru/gallery/index-en.html"/>
        <link rel="alternate" hreflang="de" href="http://artchallenge.ru/gallery/index-de.html"/>
        <link rel="alternate" hreflang="es" href="http://artchallenge.ru/gallery/index-es.html"/>
        <link rel="alternate" hreflang="fr" href="http://artchallenge.ru/gallery/index-fr.html"/>
        <link rel="alternate" hreflang="zh" href="http://artchallenge.ru/gallery/index-zh.html"/>
        <link rel="alternate" hreflang="it" href="http://artchallenge.ru/gallery/index-it.html"/>
      </head>
      <body>
        <!-- Yandex.Metrika counter -->
        <script type="text/javascript">
            (function (d, w, c) {
                (w[c] = w[c] || []).push(function() {
                    try {
                        w.yaCounter24594722 = new Ya.Metrika({
                            id:24594722,
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true,
                            webvisor:true
                        });
                    } catch(e) { }
                });

                var n = d.getElementsByTagName("script")[0],
                    s = d.createElement("script"),
                    f = function () { n.parentNode.insertBefore(s, n); };
                s.type = "text/javascript";
                s.async = true;
                s.src = "https://mc.yandex.ru/metrika/watch.js";

                if (w.opera == "[object Opera]") {
                    d.addEventListener("DOMContentLoaded", f, false);
                } else { f(); }
            })(document, window, "yandex_metrika_callbacks");
        </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/24594722" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        <!-- /Yandex.Metrika counter -->
        <section class="banner" role="banner">
          <header id="header">
            <div class="header-content clearfix">
              <a class="logo" href="http://artchallenge.ru/">Art Challenge</a>
              <nav class="navigation" role="navigation">
                <ul class="primary-nav">
                  <li>
                    <a href="http://artchallenge.ru">Back to Game</a>
                  </li>
                  <li>
                    <a href="http://artchallenge.ru/gallery/index-#{ lang }.html">Browse Painters</a>
                  </li>
                  <li>
                    <a href="http://artchallenge.ru/#introduction">Donate</a>
                  </li>
                </ul>
              </nav>
              <a href="#" class="nav-toggle">Menu<span></span>
              </a>
            </div>
          </header>
        </section>
        <section id="introduction" class="section introduction" style='padding-bottom:0'>
          <div class="container">
            <div class="row">

            </div>
          </div>
        </section>
        <section id="works" class="works section no-padding">
          <div class="container-fluid">
          <div class='text-center'><br><br><h3>Art Challenge painters:</h3><br><br></div>
            <div class="row no-gutter">
  }


  gallery = ""
  for i in 1..118

    painter = JSON.parse `curl -X GET http://178.62.133.139:5994/painters/#{i}`

      gallery = gallery + %{
        <div class="col-lg-2 col-md-4 col-sm-4 work">
          <a href="http://artchallenge.ru/gallery/#{ lang }/#{ i }.html" class="work-box">
            <img style='width:250px' src="images/painters/#{ i }.jpg" alt="#{painter['name']} photo">
            <div class="overlay">
              <div class="overlay-caption">
                <p>
                #{painter['name']}
                </p>
              </div>
            </div>
          </a>
        </div>
      }
  end


  html = html + gallery + %{
            </div>
          </div>
        </section>
        <footer id="contact" class="footer">
          <div class="container">
            <div class="col-md-4">
              <h4>Contact</h4>
              <p>
                <a href='http://facebook.com/just14zy'>Ruben Babaev</a> and <a href='http://www.facebook.com/plotkina.anna'>Anna Plotkina</a>
                <br>
                Email:
                <a href="mailto:info@artchallenge.ru">
                  info@artchallenge.ru
                </a>
              </p>
            </div>
            <div class="col-md-3">
              <h4>Social presense</h4>
              <ul class="footer-share">
                <li>
                  <a href="http://facebook.com/artchallenge.ru/">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="http://vk.com/art.challenge">
                    <i class="fa fa-vk"></i>
                  </a>
                </li>
                <li>
                  <a href="http://twitter.com/artchallenge_ru">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-5">
              <p>© 2013-2016 All rights reserved.<br>
                Made with
                <i class="fa fa-heart pulse"></i>
                in
                <a href="#">Rostov-on-Don</a>
              </p>
            </div>
          </div>
        </footer>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.fancybox.pack.js"></script>
        <script src="js/main.js"></script>
      </body>
    </html>
  }




  File.open("../index-" + lang + ".html", 'w+') do |file|
      file.write html
  end
