app.controller('IndexController', ['$scope', '$cookies', function($scope, $cookies){

  $scope.checkLogin = function () {
    if ($cookies.get("id") != undefined ) {
        return true
    } else {
      return false
    }
  }

  $scope.logout = function () {
    $cookies.remove("id")
  }
  $scope.userId = $cookies.get("id");

}]);