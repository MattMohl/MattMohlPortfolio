portfolio.controller('projects', ['$route', '$rootScope', '$scope', '$firebase', '$location', 'project-service', function ($route, $routeScope, $scope, $firebase, $location, projectService) {
    console.log('PROJECTS');

    /*
    projectService
    */

    $scope.projects = projectService.getAllProjects().$asArray();
    console.log($scope.projects);

}]);