
angular.module('app',['ngRoute'])
  .config(['$routeProvider', function($routeProvider){

  $routeProvider

  .when('/', {
    templateUrl:'pages/main.html'
  })

  .when('/projects', {
    templateUrl: 'pages/projects.html'
  })

  .when('/project/:code', {
    templateUrl: 'pages/project.html',
    controller:'projectController'
  })

}]);


angular.module('app')
  .controller("MainController", ['$scope','$http', function($scope,$http){

    var admin = this;
    $http.get('http://192.168.56.1:8080/database.json')
    .success(function(res){
        admin.projects = res.projects;
    });

    this.getProjectByCode = function($code) {
      return admin.projects.then(function(projects){
        for (var i=0;i<projects.length;i++) {
          if (projects[i].code === code) return projects[i];
        }
      })
    };

}]);

angular.module('app')
  .controller('projectController',['$scope', '$routeParams', function($scope,$routeParams){
    var code = $routeParams.code;
    console.log(code);


  }]);
