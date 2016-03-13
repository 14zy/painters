// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionic.utils',]) //'angles', 'ionicLazyLoad'

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
    }
    if (window.StatusBar) {

	        StatusBar.styleDefault();
	  StatusBar.hide();
	      }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })


    .state('app.classic', {
      url: "/classic",
      views: {
        'menuContent': {
          templateUrl: "templates/classic.html",
          controller: 'ClassicCtrl'
        }
      }
    })


    .state('app.welcome', {
      url: "/welcome",
      views: {
        'menuContent': {
          templateUrl: "templates/welcome.html",
          controller: 'AppCtrl'
        }
      }
    })


    .state('app.leaderboard', {
      url: "/leaderboard",
      views: {
        'menuContent': {
          templateUrl: "templates/leaderboard.html",
          controller: 'AppCtrl'
        }
      }
    })


    .state('app.duel', {
      url: "/duel",
      views: {
        'menuContent': {
          templateUrl: "templates/duel.html",
          controller: 'ClassicCtrl'
        }
      }
    })


    .state('app.changeSet', {
      url: "/changeSet",
      views: {
        'menuContent': {
          templateUrl: "templates/changeSet.html",
          controller: ''
        }
      }
    })

    .state('app.stats', {
      url: "/stats",
      views: {
        'menuContent': {
          templateUrl: "templates/stats.html",
          controller: 'StatsCtrl'
        }
      }
    })

    .state('app.about', {
      url: "/about",
      views: {
        'menuContent': {
          templateUrl: "templates/about.html"
        }
      }
    })

    .state('app.settings', {
      url: "/settings",
      views: {
        'menuContent': {
          templateUrl: "templates/settings.html",
          controller: ''
        }
      }
    });



  // .state('app.single', {
  //   url: "/playlists/:playlistId",
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/playlist.html",
  //       controller: 'PlaylistCtrl'
  //     }
  //   }
  // });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/classic');
});
