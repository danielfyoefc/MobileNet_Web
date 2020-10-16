 var  modules = modules || [];
(function () {
    'use strict';
    modules.push('Company');

    angular.module('Company',['ngRoute'])
    .controller('Company_list', ['$scope', '$http', function($scope, $http){

        $http.get('/Api/Company/')
        .then(function(response){$scope.data = response.data;});

    }])
    .controller('Company_details', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

        $http.get('/Api/Company/' + $routeParams.id)
        .then(function(response){$scope.data = response.data;});

    }])
    .controller('Company_create', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){

        $scope.data = {};
        
        $scope.save = function(){
            $http.post('/Api/Company/', $scope.data)
            .then(function(response){ $location.path("Company"); });
        }

    }])
    .controller('Company_edit', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){

        $http.get('/Api/Company/' + $routeParams.id)
        .then(function(response){$scope.data = response.data;});

        
        $scope.save = function(){
            $http.put('/Api/Company/' + $routeParams.id, $scope.data)
            .then(function(response){ $location.path("Company"); });
        }

    }])
    .controller('Company_delete', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){

        $http.get('/Api/Company/' + $routeParams.id)
        .then(function(response){$scope.data = response.data;});
        $scope.save = function(){
            $http.delete('/Api/Company/' + $routeParams.id, $scope.data)
            .then(function(response){ $location.path("Company"); });
        }

    }])

    .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
            .when('/Company', {
                title: 'Company - List',
                templateUrl: '/Static/Company_List',
                controller: 'Company_list'
            })
            .when('/Company/Create', {
                title: 'Company - Create',
                templateUrl: '/Static/Company_Edit',
                controller: 'Company_create'
            })
            .when('/Company/Edit/:id', {
                title: 'Company - Edit',
                templateUrl: '/Static/Company_Edit',
                controller: 'Company_edit'
            })
            .when('/Company/Delete/:id', {
                title: 'Company - Delete',
                templateUrl: '/Static/Company_Delete',
                controller: 'Company_delete'
            })
            .when('/Company/:id', {
                title: 'Company - Details',
                templateUrl: '/Static/Company_Details',
                controller: 'Company_details'
            })
    }])
;

})();
