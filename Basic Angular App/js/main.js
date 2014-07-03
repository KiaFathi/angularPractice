var app = angular.module('myApp', []);

app.controller('PlayerController', ['$scope', function($scope){
  $scope.playing = false;
  $scope.audio = document.createElement('audio');
  $scope.audio.src = './WAPBOM.COM%20-%20The%20Troll%20song%20%20Full%20Song.mp4';

  $scope.play = function(){
    $scope.audio.play();
    $scope.playing = true;
  };

  $scope.stop = function(){
    $scope.audio.pause();
    $scope.playing = false;
  };
  $scope.audio.addEventListener('ended', function(){
    $scope.$apply(function(){
      $scope.stop()
    });
  });

}]);

app.controller('MyController', ['$scope', function($scope){
  $scope.person = {
    name: 'Kia Fathi'
  };
  var updateClock = function(){
    $scope.clock = new Date();
  };
}])

app.controller('RelatedController', ['$scope', function($scope){}]);
