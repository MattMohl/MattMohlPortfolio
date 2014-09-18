portfolio.controller('admin', ['$route', '$scope', '$rootScope', '$firebase', '$firebaseSimpleLogin', function ($route, $scope, $rootScope, $firebase, $firebaseSimpleLogin) {
    console.log('ADMIN');

    $scope.admin = {
        email: '',
        pass: ''
    };

    $scope.login = function () {
        console.log('attempt', $scope.admin.email, $scope.admin.pass);
    }

}]);