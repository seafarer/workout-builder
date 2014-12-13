// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('workoutBuilder', ['ionic', 'starter.controllers'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html"
      })

      .state('app.profile', {
        url: "/profile",
        views: {
          'menuContent': {
            templateUrl: "templates/profile.html"
          }
        }
      })

      .state('app.current', {
        url: "/current",
        views: {
          'menuContent': {
            templateUrl: "templates/current.html"
          }
        }
      })

      .state('app.history', {
        url: "/history",
        views: {
          'menuContent': {
            templateUrl: "templates/history.html"
          }
        }
      })

      .state('app.progressions', {
        url: "/progressions",
        views: {
          'menuContent': {
            templateUrl: "templates/progressions.html",
            controller: 'ProgressionsCtrl'
          }
        }
      })
//
//      .state('app.progression', {
//        url: "/progressions/:progressionId",
//        views: {
//          'menuContent': {
//            templateUrl: "templates/progression.html",
//            controller: 'ProgressionCtrl'
//          }
//        }
//      })

      .state('app.squats', {
        url: "/progressions/squats",
        views: {
          'menuContent': {
            templateUrl: "templates/squats.html",
            controller: 'SquatsCtrl'
          }
        }
      })

      .state('app.legraise', {
        url: "/progressions/legraise",
        views: {
          'menuContent': {
            templateUrl: "templates/legraise.html",
            controller: 'LegraiseCtrl'
          }
        }
      })

      .state('app.hspu', {
        url: "/progressions/hspu",
        views: {
          'menuContent': {
            templateUrl: "templates/hspu.html",
            controller: 'HspuCtrl'
          }
        }
      })

      .state('app.rows', {
        url: "/progressions/rows",
        views: {
          'menuContent': {
            templateUrl: "templates/rows.html",
            controller: 'RowsCtrl'
          }
        }
      })

      .state('app.pushups', {
        url: "/progressions/pushups",
        views: {
          'menuContent': {
            templateUrl: "templates/pushups.html",
            controller: 'PushupCtrl'
          }
        }
      })

      .state('app.pullups', {
        url: "/progressions/pullups",
        views: {
          'menuContent': {
            templateUrl: "templates/pullups.html",
            controller: 'PullupsCtrl'
          }
        }
      })


      .state('app.squat', {
        url: "/progressions/squats/:squatId",
        views: {
          'menuContent': {
            templateUrl: "templates/squat.html",
            controller: 'SquatCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/progressions');
  });
