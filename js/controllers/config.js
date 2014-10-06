var portfolio = angular.module('portfolio', ['ngRoute', 'firebase']);

portfolio.config(function ($routeProvider) {

    console.log('config');

    $routeProvider.when('/', {
        controller: 'main',
        templateUrl: 'views/home.html'
    }).when('/home', {
        controller: 'main',
        templateUrl: 'views/home.html'
    }).when('/about', {
        controller: 'main',
        templateUrl: 'views/about.html'
    }).when('/projects', {
        controller: 'projects',
        templateUrl: 'views/projects.html'
    }).when('/credits', {
        controller: 'main',
        templateUrl: 'views/credits.html'
    }).when('/admin', {
        controller: 'admin',
        templateUrl: 'views/login.html'
    })
    .otherwise({ redirectTo: '/' });

});

portfolio.run(['$route', '$rootScope', '$firebase', '$location', function ($route, $rootScope, $firebase, $location) {
    console.log('RUN');

    // Every Time Browser is Refreshed . . .

    $rootScope.firebase = new Firebase("https://mattmohl.firebaseio.com/");

}]);