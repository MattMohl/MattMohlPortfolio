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
    .otherwise({ redirectTo: '/home' });

}).filter('toArray', function () {
    'use strict';
    return function (obj) {
        if (!(obj instanceof Object)) {
            return obj;
        }

        return Object.keys(obj).filter(function (key) { if (key.charAt(0) !== "$") { return key; } }).map(function (key) {
            return Object.defineProperty(obj[key], '$key', { __proto__: null, value: key });
        });
    };
}).filter('reverse', function () {
    console.log('shit');
    return function (items) {
        return items.slice().reverse();
    };
});

portfolio.run(['$route', '$rootScope', '$firebase', '$location', function ($route, $rootScope, $firebase, $location) {
    console.log('RUN');

    // Every Time Browser is Refreshed . . .

}]);