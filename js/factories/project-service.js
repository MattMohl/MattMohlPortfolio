portfolio.factory('project-service', ['$firebase', function ($firebase) {

    var projects = new Firebase('https://mattmohl.firebaseio.com/projects');
    return {
        getAllProjects: function () {
            return $firebase(projects);
        }
    }

}]);