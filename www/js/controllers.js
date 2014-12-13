angular.module('starter.controllers', [])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};

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

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('ProgressionsCtrl', function($scope, $http) {
    var progressions = this;
    progressions.progression = [];

    $http.get('/data/progressions.json').success(function(data) {
      progressions.progression = data;

    }, function(err) {
      console.error('ERR', err);
    })
  })

  .controller('ProgressionCtrl', function($scope, $stateParams, $http) {
    var progression = this;
    progression.exercise = [];

    $http.get('/data/progression.json').success(function(data) {
      progression.exercise = data;

    }, function(err) {
      console.error('ERR', err);
    })
  })

  .controller('SquatsCtrl', function($scope, $stateParams, $http) {
    var squats = this;
    squats.exercise = [];

    $http.get('/data/squats.json').success(function(data) {
      squats.exercise = data;
    }, function(err) {
      console.error('ERR', err);
    })
  })

  .controller('LegraiseCtrl', function($scope, $stateParams, $http) {
    var legraise = this;
    legraise.exercise = [];

    $http.get('/data/leg-raises.json').success(function(data) {
      legraise.exercise = data;
    }, function(err) {
      console.error('ERR', err);
    })
  })

  .controller('PushupCtrl', function($scope, $stateParams, $http) {
    var pushups = this;
    pushups.exercise = [];

    $http.get('/data/pushups.json').success(function(data) {
      pushups.exercise = data;
      console.log(data);
    }, function(err) {
      console.error('ERR', err);
    })
  })

  .controller('HspuCtrl', function($scope, $stateParams, $http) {
    var hspu = this;
    hspu.exercise = [];

    $http.get('/data/hspu.json').success(function(data) {
      hspu.exercise = data;
    }, function(err) {
      console.error('ERR', err);
    })
  })

  .controller('RowsCtrl', function($scope, $stateParams, $http) {
    var rows = this;
    rows.exercise = [];

    $http.get('/data/rows.json').success(function(data) {
      rows.exercise = data;
    }, function(err) {
      console.error('ERR', err);
    })
  })

  .controller('PullupsCtrl', function($scope, $stateParams, $http) {
    var pullups = this;
    pullups.exercise = [];

    $http.get('/data/pullups.json').success(function(data) {
      pullups.exercise = data;
    }, function(err) {
      console.error('ERR', err);
    })
  })

;
