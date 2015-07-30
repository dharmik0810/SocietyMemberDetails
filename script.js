
(function() {
  'use strict';
  var todos= angular.module('UXSociety', ['ui.bootstrap']);

  todos.controller('HomeCtrl', HomeController);

  function HomeController($rootScope, $http,$scope) {
 $scope.hc.users = []
  ,$scope.currentPage = 1
  ,$scope.numPerPage = 10
  ,$scope.maxSize = 5;

var a =
    $http({
      method: 'GET',
      url: 'http://private-a73e-aquentuxsociety.apiary-mock.com/members'
    }).success(function(data) {
      hc.users = data;
    });

 $scope.makeTodos = function() {
    $scope.hc.users = [];
    for(var i = 1; i <= 5; i++){
      $scope.hc.users.push(  );
    }
    
  };
  $scope.makeTodos(); 
 $scope.numPages = function () {
    return Math.ceil($scope.todos.length / $scope.numPerPage);
  };
  
   $scope.$watch('currentPage + numPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    , end = begin + $scope.numPerPage;
    
    $scope.filteredTodos = $scope.todos.slice(begin, end);
  });
    var hc = this;
    hc.name = 'UX Society Member';
    

  }
})();
