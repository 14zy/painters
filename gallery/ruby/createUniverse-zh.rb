require "json"

## Берем всю инфу по текущему языку из CouchDB
lang = "zh";
langDB = JSON.parse `curl -X GET http://178.62.133.139:5997/lang/#{lang}`


##Проходимся по всем 118 художникам
for n in 1..135

  allowEdit = ""

  ## Берем инфу по художнику из CouchDB
  painter = JSON.parse `curl -X GET http://178.62.133.139:5997/painters/#{n}`


  ## Обрабатываем немного
  description =  painter["bio"][lang].sub("<p>","")[0..150].gsub(/\s\w+\s*$/, '...')

  if painter["bio"][lang] == ""
    allowEdit = %{<p>We beg your pardon, but temporary this painter's biography is not available in your language</p><p>If you know the good source, please feel free to add biography of the painter to the site</p><button id='editBtn' class='btn btn-clear'>Edit</button>}
  end

  painterName = langDB['painters'][painter['_id']]

  painterNations = []
  painter["nationality"].each do |nationality|
    painterNations.push(langDB['nation'][nationality])
  end

  painterGenres = []
  painter["genre"].each do |genre|
    painterGenres.push(langDB['genre'][genre])
  end

  painter["link"]['wikipedia'][lang] = painter["link"]['wikipedia']["en"]

  # Генерим страницу
  html =  %{
    <!doctype html>
    <html lang="#{lang}">
      <head>
        <meta charset="utf-8">
        <meta name="description" content="#{ description }">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>#{ painterName }, #{ painterNations.join(', ') } #{ painterGenres.join(', ') } painter – Art Challenge</title>
        <link rel="stylesheet" href="../css/bootstrap.min.css">
        <link rel="stylesheet" href="../css/jquery.fancybox.css">
        <link rel="stylesheet" href="../css/main.css">
        <link rel="stylesheet" href="../css/responsive.css">
        <link rel="stylesheet" href="../css/animate.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

        <meta name="apple-itunes-app" content="app-id=1088982103">
        <link rel="alternate" hreflang="ru" href="http://artchallenge.ru/gallery/ru/#{ painter["id"] }.html"/>
        <link rel="alternate" hreflang="en" href="http://artchallenge.ru/gallery/en/#{ painter["id"] }.html"/>
        <link rel="alternate" hreflang="de" href="http://artchallenge.ru/gallery/de/#{ painter["id"] }.html"/>
        <link rel="alternate" hreflang="es" href="http://artchallenge.ru/gallery/es/#{ painter["id"] }.html"/>
        <link rel="alternate" hreflang="fr" href="http://artchallenge.ru/gallery/fr/#{ painter["id"] }.html"/>
        <link rel="alternate" hreflang="zh" href="http://artchallenge.ru/gallery/zh/#{ painter["id"] }.html"/>
        <link rel="alternate" hreflang="it" href="http://artchallenge.ru/gallery/it/#{ painter["id"] }.html"/>

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
              <a class="logo" href="http://artchallenge.ru/gallery/#{lang}/#{ painter["id"] }.html">#{ painterName }</a>
              <nav class="navigation" role="navigation">
                <ul class="primary-nav">
                  <li>
                    <a href="http://artchallenge.ru">Play the Game</a>
                  </li>
                  <li>
                    <a href="http://artchallenge.ru/gallery/index-#{ lang }.html">Browse Painters</a>
                  </li>
                  <li>
                    <a href="http://artchallenge.ru/#introduction">Donate</a>
                  </li>
                  <li>
                    <div class="dropdown">
                      <a style='cursor:pointer' class="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown">
                            Language
                            <span class="caret"></span>
                          </a>
                      <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                        <a role="menuitem" tabindex="-1" href="http://artchallenge.ru/gallery/ru/#{ painter["id"] }.html">Русский</a>
                        <a role="menuitem" tabindex="-1" href="http://artchallenge.ru/gallery/en/#{ painter["id"] }.html">English</a>
                        <a role="menuitem" tabindex="-1" href="http://artchallenge.ru/gallery/de/#{ painter["id"] }.html">Deutsch</a>
                        <a role="menuitem" tabindex="-1" href="http://artchallenge.ru/gallery/es/#{ painter["id"] }.html">Español</a>
                        <a role="menuitem" tabindex="-1" href="http://artchallenge.ru/gallery/fr/#{ painter["id"] }.html">Français</a>
                        <a role="menuitem" tabindex="-1" href="http://artchallenge.ru/gallery/it/#{ painter["id"] }.html">Italiano</a>
                        <a role="menuitem" tabindex="-1" href="http://artchallenge.ru/gallery/zh/#{ painter["id"] }.html">Chinese</a>
                      </ul>
                    </div>
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
              <div class="col-md-4 col-sm-6">
                <div class="intro-content">
                  <img style='width:100%' src='../images/painters/#{ painter["id"] }.jpg'>
                </div>
              </div>
              <div class="col-md-5 col-sm-6">
              <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
              <!-- Art Challenge Gallery -->
              <ins class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-2407992058828148"
              data-ad-slot="6548194427"
              data-ad-format="auto"></ins>
              <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
                <div class="intro-content" id='text'>
                  #{ painter["bio"][lang] }
                  #{ allowEdit }
                </div>
                <div class="intro-content" id='editor' style='display:none;'>
                  <textarea id='txtBio' style='width: 450px; height: 500px'>#{ painter["bio"][lang] }</textarea>
                  <button id='saveBtn' class='btn btn-success'>Save</button>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="intro-content">
                <h4>Nationality</h4>
                #{ painterNations.join(', ') }
                <h4>Genres</h4>
                #{ painterGenres.join(', ') }
                <h4>Years</h4>
                #{ painter["years"] }
                <h4>Wikipedia</h4>
                <a target='_blank' href='#{ painter["link"]['wikipedia'][lang] }'>Open page</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="works" class="works section no-padding">
          <div class="container-fluid">
          <div class='text-center'><br><br><h3>#{ painter["name"] } paintings:</h3><br><br></div>
            <div class="row no-gutter">
  }


  ## Генерим галлерейку
  gallery = ""

  for i in 1..(painter["paintings"].count)


    index = i -1

    if painter["paintings"][index]["name"][lang] == ""
      painter["paintings"][index]["name"][lang] = "Unknown"
    end

    if painter["paintings"][index]["year"] == ""
      painter["paintings"][index]["year"] = "Unknown"
    end

    if painter["paintings"][index]["place"] == ""
      painter["paintings"][index]["place"] = "Unknown"
    end





      # gallery = gallery + %{
      #   <div class="col-lg-2 col-md-4 col-sm-4 work">
      #     <a rel='gallery-examples' href="http://artchallenge.me/painters/#{ painter["id"] }/#{i}.jpg" class="work-box">
      #       <img class='lazy' data-src="http://artchallenge.me/painters/#{ painter["id"] }/#{i}.jpg" alt="Картина #{ painterName }">
      #       <div class="overlay">
      #         <div class="overlay-caption">
      #           <p>
      #             <i class="fa fa-search-plus fa-2x"></i>
      #           </p>
      #         </div>
      #       </div>
      #     </a>
      #   </div>
      # }

      gallery = gallery + %{
        <div class='row'>
          <div class="col-md-2 col-sm-2">
          </div>

          <div class="col-md-7 col-sm-7 text-right">
            <a rel='gallery-examples' href="http://artchallenge.me/painters/#{ painter["id"] }/#{i}.jpg" class="work-box-no-css">
              <img style='max-width: 100%' class='lazy' data-src="http://artchallenge.me/painters/#{ painter["id"] }/#{i}.jpg" alt="#{ painterName } painting">
            </a>
            <br><br><br><br>
          </div>



          <div class="col-md-3 col-sm-3" style='padding-left: 20px'>
            <h4 style='margin-top:0'>Title</h4>
            <text title='Edit' id='name-#{i}'>#{painter["paintings"][index]["name"][lang]} <i style='cursor: pointer' onclick="$('#name-#{i}').css('display', 'none'); $('#editName-#{i}').css('display', 'block');" class="fa fa-edit"></i></text>

            <div id='editName-#{i}' style='display:none'><textarea style='width: 90%' id='txtName-#{i}'>#{painter["paintings"][index]["name"][lang]}</textarea>
              <button style='margin-top: 0' id='saveName-#{i}' onclick='save("#{i}")' class='btn btn-xs btn-success'>Save</button>
            </div>

            <br>
            <h4>Date</h4>

            <text title='Edit' id='year-#{i}'>#{painter["paintings"][index]["year"]} <i style='cursor: pointer' onclick="$('#year-#{i}').css('display', 'none'); $('#editYear-#{i}').css('display', 'block') " class="fa fa-edit"></i></text>

            <div id='editYear-#{i}' style='display:none'><textarea style='width: 90%' id='txtYear-#{i}'>#{painter["paintings"][index]["year"]}</textarea>
              <button style='margin-top: 0' id='saveYear-#{i}' onclick='save("#{i}")' class='btn btn-xs btn-success'>Save</button>
            </div>

            <!-- <br>
            <h4>Current Place</h4>
            <text id='location-#{i}'>#{painter["paintings"][index]["place"]} <i style='cursor: pointer' onclick="$('#location-#{i}').css('display', 'none'); $('#editLocation-#{i}').css('display', 'block') " class="fa fa-edit"></i></text>

            <div id='editLocation-#{i}' style='display:none'><textarea style='width: 90%' id='txtLocation-#{i}'>#{painter["paintings"][index]["place"]}</textarea>
              <button style='margin-top: 0' id='saveLocation-#{i}' onclick='save("#{i}")' class='btn btn-xs btn-success'>Save</button>
            </div> -->
          </div>

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


        <div class="modal fade" id='myModal' tabindex="-1" role="dialog" >
          <div class="modal-dialog ">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 class="modal-title">Done!</h4>
                </div>
              <div class="modal-body">
                Thank you! We will check this information and update Art Challenge database as soon as possible.
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success" data-dismiss="modal">Ok</button>
              </div>
            </div>
          </div>
        </div>

        <script src="//yastatic.net/jquery/2.1.4/jquery.min.js" type="text/javascript"></script>

        <script src="../js/bootstrap.min.js"></script>
        <script src="../js/jquery.fancybox.pack.js"></script>
        <script src="http://js.nicedit.com/nicEdit-latest.js" type="text/javascript"></script>

        <script src="../js/jquery.lazy.min.js"></script>
        <script defer id="cid0020000126794164978" data-cfasync="false" async src="//st.chatango.com/js/gz/emb.js" style="width: 302px;height: 373px;">{"handle":"artchallenge","arch":"js","styles":{"a":"000000","b":100,"c":"FFFFFF","d":"FFFFFF","k":"000000","l":"000000","m":"000000","n":"FFFFFF","p":"10","q":"000000","r":100,"pos":"br","cv":1,"cvfnt":"'Helvetica Neue', Helvetica, Arial, sans-serif, sans-serif","cvbg":"000000","cvw":180,"cvh":30,"ticker":1,"fwtickm":1,"allowpm":0, "surl":0}}</script>
        <script>
          window.painterID = #{ painter["_id"] };
          window.lang = "#{ lang }";
        </script>

        <script src="http://178.62.133.139:5997/_utils/script/json2.js"></script>
        <script src="http://178.62.133.139:5997/_utils/script/sha1.js"></script>
        <script src="http://178.62.133.139:5997/_utils/script/jquery.couch.js?0.11.0"></script>
        <script src="http://178.62.133.139:5997/_utils/script/jquery.dialog.js?0.11.0"></script>

        <script src="../js/main.js"></script>
      </body>
    </html>
  }






  ##Записываем в html файл
  File.open("../"+lang+"/"+painter["_id"] +".html", 'w+') do |file|
      file.write html
  end

end
