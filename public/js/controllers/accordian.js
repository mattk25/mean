/**
 * Created by matt on 11/12/13.
 */
angular.module('mean.system').controller('AccordianController', ['$scope', 'Global', '$location', function ($scope, Global, $location) {
    $scope.global = Global;

    $scope.headers = [{
            main: "Manage References",
            sub: ['View Recent', 'Create', 'Research']
        },
        {
            main: "Menu2",
            sub: ['One','Two','Three']
        }];

    $scope.loadPage = function(path) {
        $location.path(path);
    };


}]);


