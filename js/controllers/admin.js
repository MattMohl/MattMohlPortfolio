portfolio.controller('admin', function ($route, $scope, $rootScope, $firebase, $location, $firebaseSimpleLogin) {
    console.log('ADMIN');

    $scope.admin = { email: 'mattmohldev@gmail.com', pass: '' };

    $scope.login = function () {
        console.log('bullshit');
        $rootScope.authRef.login('password', {
            email: $scope.admin.email,
            password: $scope.admin.pass
        });
    }

    $scope.logout = function () {
        console.log('logout');
        $rootScope.authRef.logout();
        delete $rootScope.currentUser;
        $location.path('/');
    }

});