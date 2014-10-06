portfolio.controller('admin', function ($route, $scope, $rootScope, $firebase, $firebaseSimpleLogin) {
    console.log('ADMIN');

    $scope.admin = {
        email: '',
        pass: ''
    };

    $rootScope.authRef = new FirebaseSimpleLogin($rootScope.firebase,
        function (error, user) {
            console.log(error);
            console.log(user);
        });

    //$rootScope.authRef.login('password', $scope.admin);

    $scope.log = function () {
        console.log($scope.admin);
        $rootScope.authRef.login('password', $scope.admin);
    }

});