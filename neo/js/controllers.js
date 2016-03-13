angular.module('starter.controllers', [])

.controller('ClassicCtrl', function($scope, Painters, $ionicSideMenuDelegate, pouchService, $ionicModal, $ionicPopup) {

    $scope.picturePreload = function() {
      newPainter = $scope.painters[getRandomIndex($scope.painters.length)];
      newPainterPicture = Math.floor((Math.random() * newPainter.paintings) + 1);
      $scope.picturePreloadUrl = $scope.getPicture(newPainter, newPainterPicture);
    };

    $scope.newRound = function() {
      $scope.showLoader();

      buttonsAreWorking = true;

      currentPainter = newPainter;
      currentPainterPainting = newPainterPicture;
      $scope.picture = $scope.picturePreloadUrl;

      $scope.picturePreload();

      candidates = [];
      candidates.push(currentPainter);

      while (candidates.length < 4) {

        candidate = $scope.painters[getRandomIndex($scope.painters.length)];

        while (candidate == candidates[0] ||
          candidate == candidates[1] ||
          candidate == candidates[2] ||
          candidate == candidates[3]) {
          candidate = $scope.painters[getRandomIndex($scope.painters.length)];
        }
        candidates.push(candidate);
        candidate = null;
      }

      $scope.candidates = shuffle(candidates);
    };

    $scope.checkAnswer = function(event) {

      if (buttonsAreWorking) {
        buttonsAreWorking = false;
        if ($(event.target)[0].children[1].innerHTML == $scope.lang.painters[currentPainter.id]) {
          $(event.target).addClass("button-answer-right");
          $scope.answers.push(true);
          $scope.addAnswer({
            set: $scope.settings.currentSet.id,
            painter: currentPainter.id,
            painting: currentPainterPainting,
            answer: true
          });

          switch ($scope.answers.length) {
            case 10:
              // soundWin.play();
              if ($scope.gameMode == 'classic') {
                $("#win").addClass("animated slideInDown");
                $("#win").css("display", "block");

                setTimeout(function() {
                  $("#winDesc").addClass("animated fadeInUp");
                  $("#winDesc").css("display", "block");
                }, 1000);

                setTimeout(function() {
                  $(event.target).removeClass("button-answer-right");
                }, 1500);

                $scope.userStats.wins[$scope.settings.currentSet.id] = $scope.userStats.wins[$scope.settings.currentSet.id] + 1;
                break;
              }
            default:

              // soundRight.play();

              if ($scope.settings.emoji === false) {
                emoji = "";
              } else {
                emoji = "<img style='position:absolute; top: 0; right:0; margin: 10px; height: 50px;' src='img/emoji/right" + Math.floor(Math.random() * 10) + ".png'>";
              }

              var goodMsg = new PNotify({
                title: goodPhrase() + emoji,
                text: $scope.lang.message['right-desc'].replace("__count__", $scope.answers.length),
                addclass: "answerRight",
                animation: 'slide',
                hide: true,
                animate_speed: "fast",
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

              goodMsg.get().click(function() {
                goodMsg.remove();
              });

              setTimeout(function() {
                $('#picture').addClass('animated fadeOutLeft');
                $scope.$apply();
              }, 1000);

              setTimeout(function() {
                $(event.target).removeClass("button-answer-right");
                $scope.newRound();
                $scope.$apply();
              }, 1900);
          }
        } else {
          $scope.answers.push(false);
          $scope.addAnswer({
            set: $scope.settings.currentSet.id,
            painter: currentPainter.id,
            painting: currentPainterPainting,
            answer: false
          });
          $(event.target).addClass("button-answer-wrong");

          switch (currentPainter.id) {
            case candidates[0].id:
              rightAnswerBtn = 0;
              break;
            case candidates[1].id:
              rightAnswerBtn = 1;
              break;
            case candidates[2].id:
              rightAnswerBtn = 2;
              break;
            case candidates[3].id:
              rightAnswerBtn = 3;
              break;
          }

          $("#" + rightAnswerBtn).addClass("button-answer-right");

          // soundWrong.play();

          if ($scope.settings.emoji === false) {
            emoji = "";
          } else {
            emoji = "<img style='position:absolute; top: 0; right:0; margin: 10px; height: 50px;' src='img/emoji/wrong" + Math.floor(Math.random() * 14) + ".png'>";
          }

          var wrongMsg = new PNotify({
            title: "" + badPhrase(),
            text: $scope.lang.message['wrong-desc'] + " " + $scope.lang.painters[currentPainter.id] + emoji + "<br><button style='margin: 10px 0 0px 0' class='button button-full button-positive button-small'>" + $scope.lang.message["learn-more"] + "</button>",
            addclass: "answerWrong",
            animation: 'slide',
            hide: true,
            animate_speed: "fast",
            delay: 3300,
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
          var painterForInfo = currentPainter;
          wrongMsg.get().click(function() {
            wrongMsg.remove();
            $scope.showPainterInfo(painterForInfo);
          });

          setTimeout(function() {
            $('#picture').addClass('animated rollOut');
            $scope.$apply();
          }, 2000);


          setTimeout(function() {
            $scope.answers = [];
            $(event.target).removeClass("button-answer-wrong");
            $("#" + rightAnswerBtn).removeClass("button-answer-right");
            rightAnswerBtn = null;
            $scope.newRound();
            $scope.$apply();
          }, 2900);

        }

      }
    };

    //misc

    // var soundWin = new Audio('sounds/winner.wav');
    // var soundRight = new Audio('sounds/right2.wav');
    // var soundWrong = new Audio('sounds/wrong.wav');

    $scope.getScores = function(num) {
      return new Array(num);
    };

    function goodPhrase() {
      return $scope.lang.goodPhrases[Math.floor((Math.random() * 20) + 1)];
    }

    function badPhrase() {
      if ($scope.settings.abuse) {
        return $scope.lang.badPhrases[Math.floor((Math.random() * 12) + 1)];
      } else {
        return $scope.lang.message.wrong;
      }
    }


    function shuffle(o) {
      for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    }

    $scope.$watch('settings.currentSet', function(newVal, oldVal) {
      if (newVal != oldVal) {
        $scope.painters = Painters[$scope.settings.currentSet.id]();
        $scope.picturePreload();
        $scope.newRound();
        $scope.answers = [];
      }

      //Ставим бэкграунд
      // if (newVal.background) {
      //   $("#classicBackgroud").css("background-image", "url('img/" + newVal.background + "')");
      //   $("#classicBackgroud").css("background-repeat", "no-repeat");
      //   $("#classicBackgroud").css("background-size", "cover");
      // } else {
      //   $("#classicBackgroud").css("background", "none");
      // }

      if ($("#win").css("display") == "block") {
        $scope.closeWin();
      }
    }, true);

    $scope.closeWin = function(newRound) {
      if (newRound === true) {
        $scope.newRound();
        $scope.answers = [];
      }

      if (newRound == 'tournament') {
        $scope.newRound();
        // $scope.answers = [];
      }

      $("#win").removeClass("animated slideInDown");
      $("#win").addClass("animated rotateOutUpLeft");
      $("#winDesc").addClass("animated fadeOutDown");
      setTimeout(function() {
        $("#win").css("display", "none");
        $("#winDesc").css("display", "none");
        $("#win").removeClass("animated rotateOutUpLeft");
        $("#winDesc").removeClass("animated fadeOutDown");
      }, 2000);
    };

    $scope.showCloseWin = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: $scope.lang.message.closeWinTitle,
        template: $scope.lang.message.closeWinMessage
      });
      confirmPopup.then(function(res) {
        if (res) {
          $scope.closeWin(true);
        } else {
        }
      });
    };

    $scope.addAnswer = function(answer) {

      if ($scope.gameMode == 'tournament' && answer.answer === true) {
        if ($scope.userStats.leaderboard[$scope.settings.currentSet.id] < $scope.answers.length) {
          $scope.userStats.leaderboard[$scope.settings.currentSet.id] = $scope.answers.length;
          me = {
            name: $scope.userInfo.name,
            basic: $scope.userStats.leaderboard.basic,
            renaissance: $scope.userStats.leaderboard.renaissance,
            impressionism: $scope.userStats.leaderboard.impressionism,
            realism: $scope.userStats.leaderboard.realism,
            french: $scope.userStats.leaderboard.french,
            russian: $scope.userStats.leaderboard.russian
          };
          $scope.leaderboardDB.get($scope.userInfo.email).then(function(doc) {
            return $scope.leaderboardDB.put(me, $scope.userInfo.email, doc._rev);
          }).then(function(response) {
            $scope.leaderboardDB.query('leaderboard/' + $scope.settings.currentSet.id, {
              descending: true,
              limit: 1000
            }).then(function(doc) {
              $scope.leaderboard = doc.rows;
              $scope.getScore();
            }).catch(function(err) {
              console.log(err);
            });
            // handle response
          }).catch(function(err) {
            console.log(err);
            console.log('Пользователя нет в таблице лидеров, регаем его');
            $scope.leaderboardDB.put(me, $scope.userInfo.email).then(function(response) {
              $scope.leaderboardDB.query('leaderboard/' + $scope.settings.currentSet.id, {
                descending: true,
                limit: 1000
              }).then(function(doc) {
                $scope.leaderboard = doc.rows;
                $scope.getScore();
              }).catch(function(err) {
                console.log(err);
              });
            });
          });
        }
      }

      var d = new Date();
      answer.date = d;

      try {
        $scope.userStats.answersHistory.push(answer);

        total_answers = $scope.userStats.answersHistory.filter(function(x) {
          return x.set == $scope.settings.currentSet.id;
        });
        if (total_answers.length >= 10) {
          right_answers = total_answers.filter(function(x) {
            return x.answer === true;
          }).length;
          stats = (right_answers / (total_answers.length / 100)).toFixed(0);
          $scope.userStats.stats[$scope.settings.currentSet.id] = stats;
        }

      }
      catch(err) {
        console.log("can't add answer to answer history");
      }

      // updateDB(); не нужно?
    };

    updateDB = function() {
      pouchService.db.get('userStats').then(function(doc) {
        return pouchService.db.put({
          answersHistory: $scope.userStats.answersHistory.slice(-1000),
          wins: $scope.userStats.wins,
          stats: $scope.userStats.stats,
          leaderboard: $scope.userStats.leaderboard
        }, 'userStats', doc._rev);
      }).then(function(response) {
        // handle response
      }).catch(function(err) {
        console.log(err);
      });
    };

    $scope.getScore = function() {

      $scope.leaderboardMyPlace = false;

      angular.forEach($scope.leaderboard, function(value, key) {
        if ($scope.userInfo.email == value.id) {
          console.log('Считаем позицию в таблице лидеров: Пользователь уже зареган и присутствует в таблице лидеров');
          $scope.leaderboardMyPlace = key + 1;
        }

        if (!$scope.leaderboardMyPlace && $scope.userStats.leaderboard[$scope.settings.currentSet.id] >= value.key) {
          console.log('Считаем позицию в таблице лидеров: Пользователь не зареган, но его статс круче чем у кого-либо из базы');
          $scope.leaderboardMyPlace = key + 1;
        }

      });
    };


    $scope.$watch('gameMode', function(newVal, oldVal) {
      if (newVal != oldVal && newVal == 'tournament') {
        $scope.closeWin('tournament');

        $scope.leaderboardMyPlace = false;

        $scope.leaderboardDB.query('leaderboard/' + $scope.settings.currentSet.id, {
          descending: true,
          limit: 1000
        }).then(function(doc) {
          $scope.leaderboard = doc.rows;
          $scope.getScore();
          $scope.$apply();
        }).catch(function(err) {
          console.log(err);
        });

      }
    }, true);


    try {
      $scope.painters = Painters[$scope.settings.currentSet.id]();
      $scope.picturePreload();
      $scope.newRound();
      $scope.answers = [];
    }
    catch(err) {
      console.log(err);
    }

  }) // controller end

.controller('AppCtrl', function($ionicSideMenuDelegate, $ionicLoading, $window, $scope, $state, $ionicHistory, $ionicViewSwitcher, $ionicScrollDelegate, $ionicModal, $timeout, Painters, $localstorage, pouchService, $ionicPopup, $ionicPlatform, $ionicSlideBoxDelegate) {

  $ionicPlatform.registerBackButtonAction(function(event) {
    if ($ionicHistory.currentStateName() == "app.classic") {
      var confirmExit = $ionicPopup.confirm({
        title: "Выход из игры",
        template: "Вы действительно хотите выйти?"
      });
      confirmExit.then(function(res) {
        if (res) {
          ionic.Platform.exitApp();
        } else {
        }
      });
    } else {
      $ionicHistory.goBack();
    }
  }, 100);

  $scope.showLoader = function() {
    $ionicLoading.show({
      template: '<ion-spinner icon="lines" class="spinner-balanced"></ion-spinner><br>Loading',
      noBackdrop: false
    });

    $scope.timer = $timeout(function() {
      $ionicLoading.show({
        template: '<ion-spinner icon="ripple" class="spinner-balanced"></ion-spinner><br>No Internet Connection<br><br><button onclick="window.location.reload(true);" class="button button-small button-assertive"><i class="ion-refresh"></i> Reload</button>',
        noBackdrop: false
      });
    }, 10000);

  };

  $scope.hideLoader = function() {
    if ($scope.imgLoaded) {
      $timeout.cancel($scope.timer);
      $ionicLoading.hide();
    }
  };

  $scope.getPicture = function(painter, picture, thumb) {
    if ($scope.settings.platformLocal) {
      if (!$scope.settings.highQuality || thumb) {
        return "painters/" + painter.id + "/thumbnails/" + picture + ".jpg";
      } else {
        return "http://artchallenge.me/painters/" + painter.id + "/" + picture + ".jpg";
      }
    } else {
      if (!$scope.settings.highQuality || thumb) {
        return "http://artchallenge.me/painters/" + painter.id + "/thumbnails/" + picture + ".jpg";
      } else {
        return "http://artchallenge.me/painters/" + painter.id + "/" + picture + ".jpg";
      }
    }
  };

  $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleRight();
  };
  $scope.$watch(function() {
    return $ionicSideMenuDelegate.isOpen();
  }, function(open) {
    if (open) {
      $("#menuIcon").addClass('positive');
      $("#menuIcon").removeClass('ion-navicon');
      $("#menuIcon").addClass('ion-ios-close');
    } else {
      $("#menuIcon").removeClass('positive');
      $("#menuIcon").removeClass('ion-ios-close');
      $("#menuIcon").removeClass('ion-navicon');

    }
  });

  $scope.$watch(function() {
    return $ionicHistory.currentStateName();
  }, function(state) {
    $("#btnSinglePlayer").css('color', 'yellow');
    $("#btnSettings").css('color', 'yellow');
    switch (state) {
      case "app.classic":
        $("#btnSinglePlayer").css('color', 'white');
        break;
      case "app.changeSet":
        break;
      case "app.settings":
        $("#btnSettings").css('color', 'white');
        break;
    }
  }); //Смотрим за текущим состоянием и меняем цвета кнопок

  $scope.gameMode = "classic";
  $scope.changeGameMode = function(mode) {
    if ($scope.settings.registered === false && mode != 'classic') {
      $scope.login();
    } else {
      $scope.gameMode = mode;
    }
  };

  //window.MY_SCOPE = $scope; // удалить в продакшне

  $scope.sets = [{
      id: "basic"
    }, {
      id: "renaissance",
      background: "bg-renaissance.png"
    }, {
      id: "impressionism"
    }, {
      id: "realism"
    }, {
      id: "french"
    }, {
      id: "russian"
    }
    // {id: "all"}
  ];

  $ionicPlatform.ready(function() {
    console.log("deviceready");

    try {
      $scope.settings = $localstorage.getObject('settings');
    }
    catch(err) {
      console.log("can't get settings from localstorage");
      $scope.settings = {};
    }

    if (!$scope.settings.langId) {

      //platform remote
      console.log("platform remote on");
      $scope.settings.platformLocal = false;
      $scope.settings.highQuality = true;
      // alert(window.innerWidth);
      if (window.innerWidth <= 350) {
        console.log('hight quality auto off');
        $scope.settings.highQuality = false;
      }

      //always
      var lang = window.navigator.userLanguage || window.navigator.language;
      lang = lang.substring(0, 2).toLowerCase();
      if (lang == "ru" || lang == "en" || lang == "de" || lang == "fr" || lang == "it" || lang == "es" || lang == "zh") {} else {
        lang = "en";
      }
      $scope.settings.langId = lang;
      $scope.settings.currentSet = $scope.sets[0];
      $scope.settings.registered = false;
      $scope.settings.abuse = true;
      $scope.settings.emoji = true;

    }


    letsGo();

  });

  function letsGo() {

    pouchService.db.get('userInfo').then(function(doc) {
      if (doc.dbname) {
        syncData(doc.dbname);
        $scope.settings.registered = true;
      } else {
        copyDataFromDBtoScope();
      }
      // console.log(doc);

    }).catch(function(err) {
      if (err.status == 404) {
        console.log(err);
        createEmptyDB();
      } else {
        console.log(err);
      }
    });



    // LEADERBOARD
    $scope.leaderboardDB = new PouchDB('http://artchallenge.me:5994/leaderboard');

    $scope.leaderboardDB.query('leaderboard/' + $scope.settings.currentSet.id, {
      descending: true,
      limit: 1000
    }).then(function(doc) {
      $scope.leaderboard = doc.rows;
    }).catch(function(err) {
      $scope.errorOffline = true;
    });



  }





  $scope.$watch('settings', function(newVal, oldVal) {
    $localstorage.setObject('settings', $scope.settings);
  }, true);

  $scope.$watch('settings.langId', function(newVal, oldVal) {
    try {
      $scope.lang = Painters[$scope.settings.langId]();
    }
    catch(err) {
      console.log(err);
    }
  }, true);


  function copyDataFromDBtoScope() {
    pouchService.db.allDocs({
      include_docs: true,
    }).then(function(result) {

      if (result.rows[0].id == "userDuels") {
        $scope.userDuels = result.rows[0].doc;
      } else {
        console.log("Ошибка: не удалось загрузить userDuels из db, result.rows[0] не совпадает с userDuels");
      }

      if (result.rows[1].id == "userInfo") {
        $scope.userInfo = result.rows[1].doc;
      } else {
        console.log("Ошибка: не удалось загрузить userInfo из db, result.rows[1] не совпадает с userInfo");
      }

      if (result.rows[2].id == "userStats") {
        $scope.userStats = result.rows[2].doc;
      } else {
        console.log("Ошибка: не удалось загрузить userStats из db, result.rows[2] не совпадает с userStats");
      }



      if ($scope.userInfo.dbname) {
        pouchService.db.sync('http://artchallenge.me:5994/' + $scope.userInfo.dbname, {
          live: true,
          retry: true
        }).on('complete', function() {
          console.log("не должно выпадать");
        }).catch(function(err) {
          console.log(err);
        });
        console.log('Start live sync');
      }

      console.log("copyDataFromDBtoScope() completed");

    }).catch(function(err) {
      console.log(err);
    });
  }

  function syncData(dbname) {
    pouchService.db.sync('http://artchallenge.me:5994/' + dbname, {}).on('complete', function() {
      copyDataFromDBtoScope();
      console.log("syncData() completed");
    }).catch(function(err) {
      copyDataFromDBtoScope();
      console.log("syncData() not completed, maybe offline");
      console.log(err);
    });
  }

  function createEmptyDB() {
    console.log("No localDB, creating new one");

    pouchService.db.destroy().then(function(response) {
      console.log(response);
      pouchService.db = new PouchDB('localDB');

      $scope.userInfo = {
        _id: "userInfo",
        name: undefined,
        email: undefined,
        dbname: undefined
      };

      $scope.userStats = {
        _id: "userStats",
        wins: {
          basic: 0,
          renaissance: 0,
          impressionism: 0,
          realism: 0,
          french: 0,
          russian: 0
        },
        stats: {
          basic: 0,
          renaissance: 0,
          impressionism: 0,
          realism: 0,
          french: 0,
          russian: 0
        },
        leaderboard: {
          basic: 0,
          renaissance: 0,
          impressionism: 0,
          realism: 0,
          french: 0,
          russian: 0
        },
        answersHistory: []
      };

      $scope.userDuels = {
        _id: "userDuels",
      };

      pouchService.db.bulkDocs([
        $scope.userInfo,
        $scope.userStats,
        $scope.userDuels
      ]).then(function(result) {
        console.log(result);
      }).catch(function(err) {
        console.log(err);
      });
    }).catch(function(err) {
      console.log(err);
    });
  }




  $ionicModal.fromTemplateUrl('templates/leaderboard.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalTournamtnShowTable = modal;
  });

  $scope.showLeaderboard = function() {
    $scope.leaderboardDB.query('leaderboard/' + $scope.settings.currentSet.id, {
      descending: true,
      limit: 1000
    }).then(function(doc) {
      $scope.leaderboard = doc.rows;
    }).catch(function(err) {
      $scope.errorOffline = true;
    });
    $scope.modalTournamtnShowTable.show();
  };

  $scope.closeLeaderboard = function() {
    $scope.modalTournamtnShowTable.hide();
  };


  // Модуль авторзации
  $scope.loginData = {};
  $scope.registerData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  function isEmail(email) {
    var regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (isNaN(email.substring(0, 1))) {
      return regex.test(email);
    } else {
      return false;
    }
  }

  function generatePassword() {
    // var length = 8,
    //   charset = "abcdefghijklnopqrstuvwxyz0123456789", //ABCDEFGHIJKLMNOPQRSTUVWXYZ
    //   retVal = "";
    // for (var i = 0, n = charset.length; i < length; ++i) {
    //   retVal += charset.charAt(Math.floor(Math.random() * n));
    // }
    // return retVal;
    return "superherodancetonight";
  }

  //Регистрация нового пользователя через имя/email
  var usersDB = new PouchDB('http://artchallenge.me:5994/painters');


  ///////////// Логин пользователя - может это вообще нахуй не нужно?? //////////
  // usersDB.getSession(function(err, response) {
  //   if (err) {
  //     // network error
  //   } else if (!response.userCtx.name) {
  //     // nobody's logged in
  //     console.log("Юзер на залогинен, добавить проверку на то есть ли его имя у нас в базе и злогинить его обратно")
  //     console.log($scope.userInfo)
  //   } else {
  //     console.log("Юзер залогинен")
  //     // console.log(response)
  //     $scope.settings.registered = true;
  //     // response.userCtx.name is the current user
  //   }
  // });
  //

  $scope.unlogin = function() {
    usersDB.logout();
    $scope.settings.registered = false;
    createEmptyDB();
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.doRegister = function() {
    if ($scope.registerData.username !== undefined && isEmail($scope.registerData.email)) {
      $("#btnRegister").html("<i class='ion-load-a'></i>");
      $scope.registerData.email = $scope.registerData.email.toLowerCase();
      $scope.registerData.password = generatePassword();
      $scope.registerData.dbname = $scope.registerData.email.replace('@', '-').replace(/\./g, '-');
      $scope.registerData.lang = $scope.settings.langId;

      usersDB.signup($scope.registerData.email, $scope.registerData.password, {
        metadata: {
          userName: $scope.registerData.username,
          dbname: $scope.registerData.dbname,
          lang: $scope.registerData.lang
        }
      }, function(err, response) {
        if (err) {
          if (err.name === 'conflict') {
            $ionicPopup.alert({
              title: $scope.lang.desc.loginMessageErrorDuplicate
            });
            // "batman" already exists, choose another username
          } else if (err.name === 'forbidden') {
            $ionicPopup.alert({
              title: $scope.lang.desc.loginMessageErrorForbiddenName
            });
            // invalid username
          } else {
            $ionicPopup.alert({
              title: $scope.lang.desc.loginMessageErrorServer
            });
            // HTTP error, cosmic rays, etc.
          }
        } else {

          //Логинимся только что зареганым пользователем
          usersDB.login($scope.registerData.email, $scope.registerData.password, function(err, response) {
            if (err) {
              if (err.name === 'unauthorized') {
                alert("Успешно зарегистрирован, но не получилось залогиниться на сервере, логин и пароль не совпадают");
                // name or password incorrect
              } else {
                alert("Успешно зарегистрирован, но не получилось залогиниться на сервере, неизвестная ошибка");
                // cosmic rays, a meteor, etc.
              }
            } else {
              $ionicPopup.alert({
                title: $scope.lang.desc.loginMessageSuccessRegister
              });
              $scope.settings.registered = true;
              $scope.closeLogin();
            }
          });


          //Создаем бд под нового пользователя на сервере
          jQuery.ajax({
            type: "POST",
            url: "http://artchallenge.me/art_create_ub.php",
            data: {
              'email': $scope.registerData.email,
            }
          }).done(function(response) {

            $scope.userInfo.name = $scope.registerData.username;
            $scope.userInfo.email = $scope.registerData.email;
            $scope.userInfo.dbname = $scope.registerData.dbname;

            //Сохраняем всю его инфу в локальной базе
            pouchService.db.get('userInfo').then(function(doc) {
              return pouchService.db.put({
                name: $scope.userInfo.name,
                email: $scope.userInfo.email,
                dbname: $scope.userInfo.dbname
              }, 'userInfo', doc._rev);
            }).then(function(response) {
              // handle response
            }).catch(function(err) {
              console.log(err);
            });


            // Подключаем сгенеренную базу к нашему юзеру
            pouchService.db.replicate.to('http://artchallenge.me:5994/' + $scope.registerData.dbname, {
              live: true,
              retry: true
            }).on('error', console.log.bind(console));

            // Регистрация успешна
            // Отправляем письмо с паролем пользователю
            jQuery.ajax({
              type: "POST",
              url: "https://mandrillapp.com/api/1.0/messages/send.json",
              data: {
                'key': 'pyL7NQYaVCP7PkkLq0BnSQ',
                'message': {
                  'from_email': 'info@artchallenge.ru',
                  'from_name': 'Art Challenge',
                  'to': [{
                    'email': $scope.registerData.email,
                    'name': $scope.registerData.username,
                    'type': 'to'
                  }],
                  'autotext': 'true',
                  'subject': $scope.lang.desc.loginMessageSuccessRegister,
                  'html': $scope.lang.desc.loginSuccessEmailText.replace('__username__', $scope.registerData.username)
                }
              }
            }).done(function(response) {
            });
          });

        }
      });
    } else {
      $ionicPopup.alert({
        title: $scope.lang.desc.loginMessageError
      });
    }
  };

  $scope.doLogin = function() {
    if ($scope.loginData.email !== undefined && isEmail($scope.loginData.email)) {
      $("#btnLogin").html("<i class='ion-load-a'></i>");
      $("#btnLogin").addClass("disabled");
      $scope.loginData.password = "superherodancetonight";
      $scope.loginData.email = $scope.loginData.email.toLowerCase();
      usersDB.login($scope.loginData.email, $scope.loginData.password, function(err, response) {
        if (err) {
          if (err.name === 'unauthorized') {
            alert("Ошибка авторизации: Пользователь с таким email не зарегистрирован");
            // name or password incorrect
          } else {
            alert("Ошибка авторизации: Неизвестная ошибка");
            // cosmic rays, a meteor, etc.
          }
        } else {

          $scope.userInfo.email = $scope.loginData.email;
          $scope.userInfo.dbname = $scope.loginData.email.replace('@', '-').replace(/\./g, '-');

          pouchService.db.replicate.from('http://artchallenge.me:5994/' + $scope.userInfo.dbname).then(function(result) {
            console.log('Скопировали базу из облака, начинаем copyDataFromDBtoScope()');
            copyDataFromDBtoScope();

            $scope.settings.registered = true;
            $ionicPopup.alert({
              title: $scope.lang.desc.loginMessageSuccessLogin
            });
            $scope.closeLogin();
          }).catch(function(err) {
            console.log($scope.userInfo.dbname);
            console.log(err);
          });
        }
      });
    } else {
      $ionicPopup.alert({
        title: $scope.lang.desc.loginMessageErrorEmail
      });
    }
  };

  /////////////////////////Конец модуля авторизации//////////////////////////////


  $scope.slideHasChanged = function($index) {
    $scope.settings.currentSet = $scope.sets[$index];
    $scope.gameMode = 'classic';

    $scope.leaderboardDB.query('leaderboard/' + $scope.settings.currentSet.id, {
      descending: true,
      limit: 1000
    }).then(function(doc) {
      $scope.leaderboard = doc.rows;
      $scope.$apply();
    }).catch(function(err) {
      $scope.errorOffline = true;
    });

  };

  $scope.activeSlideId = function() {
    try {
      slide = $scope.sets.map(function(e) {
        return e.id;
      }).indexOf($scope.settings.currentSet.id);
    }
    catch(err) {
      slide = 0;
    }

    return slide;

  };

  $scope.showPainters = function(set) {
    return Painters[set.id]();
  };

  $ionicModal.fromTemplateUrl('templates/painterShowInfo.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalPainterShowInfo = modal;
  });

  $scope.showPainterInfoById = function(event, scroll, onlyId) {
    if (onlyId) {
      painterid = event;
    } else {
      painterid = $(event.target)[0].children[2].innerHTML;
    }

    painters = Painters.all();
    painterid = painters[painterid - 1];
    $scope.showPainterInfo(painterid, scroll);
  };

  $scope.showPainterInfo = function(painter, scroll) {
    $ionicSlideBoxDelegate.$getByHandle('showPainterInfo').slide(0);
    $scope.modalPainterShowInfo.show();
    if (scroll) {
      $ionicScrollDelegate.scrollTop(true);
    }
    $scope.infoPainterId = painter.id;
    $scope.infoPainterName = $scope.lang.painters[painter.id];
    $scope.infoPainterGenre = $scope.getGenre(painter);
    $scope.infoPainternationality = $scope.getNation(painter);
    $scope.infoPainterYears = painter.years;

    $scope.infoPainterPaintings = [];
    if (painter.paintings <= 50) {
      for (i = 0; i < painter.paintings; i++) {
        $scope.infoPainterPaintings.push($scope.getPicture(painter, i + 1, true));
      }
    } else {
      for (i = 0; i < 50; i++) {
        $scope.infoPainterPaintings.push($scope.getPicture(painter, i + 1, true));
      }
    }

    if (painter.bio[$scope.settings.langId]) {
      $scope.infoPainterBio = painter.bio[$scope.settings.langId];
    } else {
      $scope.infoPainterBio = painter.bio.en;
    }

    if (painter.link.wikipedia[$scope.settings.langId]) {
      $scope.infoPainterLink = painter.link.wikipedia[$scope.settings.langId];
    } else {
      $scope.infoPainterLink = painter.link.wikipedia.en;
    }

  };


  $scope.openLink = function(link) {
    // cordova.InAppBrowser.open(link, '_blank', 'location=yes');
  };

  $scope.getGenre = function(painter) {
    genre = undefined;
    painter.genre.forEach(function(entry) {
      if (genre === undefined) {
        genre = $scope.lang.genre[entry];
      } else {
        genre = genre + ', ' + $scope.lang.genre[entry];
      }
    });
    return genre;
  };

  $scope.getNation = function(painter) {
    nationality = undefined;
    painter.nationality.forEach(function(entry) {
      if (nationality === undefined) {
        nationality = $scope.lang.nation[entry];
      } else {
        nationality = nationality + ', ' + $scope.lang.nation[entry];
      }
    });
    return nationality;
  };

  $scope.calcPictureMargin = function() {
    //добавляем отступ сверху, чтобы картина была по середине
    window.margin = 0;
    if (window.innerWidth <= 400) {
      window.margin = (($('.background').height() - $('#navigation').height() - $('#buttons').height()) - $('#picture').height()) / 2 - 5;
    } else {
      window.margin = ($('.background').height() - $('#navigation').height() - $('#buttons2').height() - $('#picture').height()) / 2 - 20;
      console.log($('.background').height());
      console.log($('#navigation').height());
      console.log($('#buttons2').height());
      console.log($('#picture').height());
      console.log(window.margin);
    }
    if (window.margin < 0) {
      window.margin = 0;
    }

    $('#picture').css('margin-top', window.margin + 'px');
  };

  $scope.imageloaded = function() {
    $('#picture').removeClass('animated rollOut');
    $('#picture').removeClass('animated fadeOutLeft');
    if ($('#picture').css("visibility") == "hidden") {
      $('#picture').css("visibility", "visible");
      $('#picture').addClass('animated fadeIn');
    } else {
      $('#picture').addClass('animated fadeInRight');
    }
    $scope.calcPictureMargin();
    $scope.imgLoaded = true;
    $scope.hideLoader();
    setTimeout(function() {
      updateDB();
    }, 1000);
  };

  getRandomIndex = function(length) {
    return Math.floor(Math.random() * length);
  };

  $scope.hideAnswers = function() {
    if (!$('#buttons').hasClass("fadeOutDown")) {
      $('#buttons').addClass('animated fadeOutDown');
      $('#picture').css('width', '100%');
      $('#picture').css('max-height', 'none');
      $("#iconZoom").attr("src", "img/ui/zoom_out.png");
    } else {
      $('#buttons').removeClass('animated fadeOutDown');
      $('#buttons').addClass('animated fadeInUp');
      $('#picture').css('width', 'auto');
      $('#picture').css('max-height', '80%');
      $("#iconZoom").attr("src", "img/ui/zoom_in.png");
    }
    $scope.calcPictureMargin();
  };

  $scope.changeSet = function(setId) {
    $scope.settings.currentSet = setId;

    $timeout(function() {
      $scope.goToClassic();
    }, 300);
  };

  $scope.goToClassic = function() {
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    $ionicViewSwitcher.nextDirection('back');
    $state.go('app.classic');
  };

  $scope.reset = function() { //можно убрать
    $window.location.reload(true);
  };

  $scope.showShare = function() {
    $("#btnShowShare").html("<i class='ion-load-a'></i>");
    // $cordovaSocialSharing
    //   .share($scope.lang.shares.title + " " + $scope.lang.shares.description + " #artchallenge", $scope.lang.shares.caption, "http://artchallenge.ru/pics/badges/" + $scope.settings.currentSet.id + "Set/winner-badge-" + $scope.settings.langId + "-shareFB.png", "http://artchallenge.ru") // Share via native share sheet
    //   .then(function(result) {
    //     // Success!
    //     $("#btnShowShare").html("<i class='icon ion-checkmark-round'></i> " + $scope.lang.message.shareWithFriends);
    //     $("#btnShowShare").removeClass("button-positive");
    //     $("#btnShowShare").addClass("button-balanced");
    //   }, function(err) {
    //     alert("Произошла ошибка :(");
    //     // An error occured. Show a message to the user
    //   });
  };

})

.controller('StatsCtrl', function($scope, $state, Painters, $localstorage, pouchService, $ionicSideMenuDelegate, $window) {

    pouchService.db.get('userStats').then(function(doc) {
      answersHistory = doc.answersHistory;
      userStats = doc.stats;
    }).then(function(response) {
      calculateStats();
      $scope.$apply();
      // handle response
    }).catch(function(err) {
      console.log(err);
    });

    function calculateStats() {
      $scope.statGlobalDays = [];

      $scope.painterStats = [];
      angular.forEach(answersHistory, function(value, key) {
        var n = new Date(value.date).getDate();
        n = n + "." + (new Date(value.date).getMonth() + 1);

        if ($scope.statGlobalDays[n]) {
          $scope.statGlobalDays[n].push(value.answer);
        } else {
          $scope.statGlobalDays[n] = [];
          $scope.statGlobalDays[n].push(value.answer);
        }

        if ($scope.painterStats[value.painter]) {
          if (value.answer === true) {
            $scope.painterStats[value.painter].trues = $scope.painterStats[value.painter].trues + 1;
          } else {
            $scope.painterStats[value.painter].bads = $scope.painterStats[value.painter].bads + 1;
          }
        } else {
            $scope.painterStats[value.painter] = {trues: 0, bads: 0};
            if (value.answer === true) {
              $scope.painterStats[value.painter].trues = 1;
            } else {
              $scope.painterStats[value.painter].bads=1;
            }
          }

      });

      bestValue = 0;
      bestValue2 = 0;
      bestValue3 = 0;
      worseValue = 0;
      worseValue2 = 0;
      worseValue3 = 0;
      angular.forEach($scope.painterStats, function(value, key) {
        score = value.trues-value.bads;

        if (score > bestValue) {
          bestValue = score;
          $scope.favoritePainter = key;
        }

        if (score > bestValue2 && score < bestValue) {
          bestValue2 = score;
          $scope.favoritePainter2 = key;
        }

        if (score > bestValue3 && score < bestValue2) {
          bestValue3 = score;
          $scope.favoritePainter3 = key;
        }


        if (score < worseValue) {
          worseValue = score;
          $scope.worsePainter = key;
        }

        if (score < worseValue2 && score > worseValue) {
          worseValue2 = score;
          $scope.worsePainter2 = key;
        }

        if (score < worseValue3 && score > worseValue2) {
          worseValue3 = score;
          $scope.worsePainter3 = key;
        }

      });

      $scope.days = Object.keys($scope.statGlobalDays).reverse();

      $scope.dataRightAnswersPercent = [];
      $scope.dataRightAnswers = [];
      $scope.dataWrongAnswers = [];

      angular.forEach($scope.days, function(valueDay, key) {
        trueValues = $scope.statGlobalDays[valueDay].filter(function(x) {
          return x === true;
        });

        $scope.dataRightAnswersPercent.push((trueValues.length / ($scope.statGlobalDays[valueDay].length / 100)).toFixed(0));
        $scope.dataRightAnswers.push(trueValues.length);
        $scope.dataWrongAnswers.push($scope.statGlobalDays[valueDay].length - trueValues.length);

      });


    } // calculateStats end


  }) // controller end

.directive('imageonload', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('load', function() {
        //call the function that was passed
        scope.$apply(attrs.imageonload);
      });
    }
  };
});
